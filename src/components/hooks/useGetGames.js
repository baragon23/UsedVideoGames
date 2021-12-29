import { useState } from 'react';
import { SEARCH_BASE_URL } from '../../config';

export const useGetGames = (searchTerm) => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getGames = async () => {
		const devEndPoint = `${SEARCH_BASE_URL}${searchTerm}`;
		const prodEndPoint = `/search/?searchTerm=${searchTerm}`;
		const endpoint = process.env.NODE_ENV === 'development' ? devEndPoint : prodEndPoint;
		//console.log(endpoint);
		setLoading(true);
		setError(false);

		try {
			let response = await fetch(endpoint);
			response = await response.json();
			let videogames = response.findItemsAdvancedResponse[0].searchResult[0].item || [];

			let USGames = videogames.filter((game) => {
				return game.country[0] === 'US';
			});

			// create array of arrays with each array corresponding to New, Like New, Very Good, etc.
			let orderedGames = [filterGames(USGames, 'Brand New')];
			orderedGames.push(filterGames(USGames, 'Like New'));
			orderedGames.push(filterGames(USGames, 'Very Good'));
			orderedGames.push(filterGames(USGames, 'Good'));
			orderedGames.push(filterGames(USGames, 'Acceptable'));

			setGames(orderedGames);
		} catch (error) {
			setError(true);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const filterGames = (games, condition) => {
		let myGames = [...games].filter((game) => game.condition[0].conditionDisplayName[0] === condition) || [];
		
		// add the shipping cost to the game price
		myGames.forEach((game, index) => {
			let gamePrice = game.sellingStatus[0].convertedCurrentPrice[0].__value__;

			// not every game has this property: shippingServiceCost
			if (game.shippingInfo[0].hasOwnProperty('shippingServiceCost')) {
				let shippingCost = game.shippingInfo[0].shippingServiceCost[0].__value__;
				game.sellingStatus[0].convertedCurrentPrice[0].__value__ = parseFloat(gamePrice) + parseFloat(shippingCost);	
			}
		});

		myGames.sort((game1, game2) => {
			return game1.sellingStatus[0].convertedCurrentPrice[0].__value__ - game2.sellingStatus[0].convertedCurrentPrice[0].__value__;
		});
		
		return myGames;
	};

	return [{ games, setGames, loading, setLoading, error, setError }, getGames];
};
