import { useState } from 'react';
import { SEARCH_BASE_URL } from '../../config';

export const useGetGames = (searchTerm) => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getGames = async () => {
		const endpoint = `/search/searchTerm=${searchTerm}`;
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

			console.log(orderedGames);
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
		myGames.sort((game1, game2) => {
			return game1.sellingStatus[0].currentPrice[0].__value__ - game2.sellingStatus[0].currentPrice[0].__value__;
		});
		return myGames;
	};

	return [{ games, setGames, loading, setLoading, error, setError }, getGames];
};
