import { useState } from 'react';
import { SEARCH_BASE_URL } from '../../config';

export const useGetGames = (searchTerm) => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getGames = async () => {
		const endpoint = `${SEARCH_BASE_URL}${searchTerm}`;
		setLoading(true);
		setError(false);

		try {
			let response = await fetch(endpoint);
			response = await response.json();
			let videogames = response.findItemsAdvancedResponse[0].searchResult[0].item || [];
			// let gamesReturned = response.findItemsAdvancedResponse[0].searchResult[0]['@count'] || 0;

			let USGames = videogames.filter((game) => {
				return game.country[0] === 'US';
			});

			let newGames = USGames.filter((game) => game.condition[0].conditionDisplayName[0] === 'Brand New');
			let likeNewGames = USGames.filter((game) => game.condition[0].conditionDisplayName[0] === 'Like New');
			let veryGoodGames = USGames.filter((game) => game.condition[0].conditionDisplayName[0] === 'Very Good');
			let goodGames = USGames.filter((game) => game.condition[0].conditionDisplayName[0] === 'Good');
			let acceptableGames = USGames.filter((game) => game.condition[0].conditionDisplayName[0] === 'Acceptable');

			// create array of arrays with each array corresponding to New, Like New, Very Good, etc.
			let orderedGames = [newGames];
			orderedGames.push(likeNewGames);
			orderedGames.push(veryGoodGames);
			orderedGames.push(goodGames);
			orderedGames.push(acceptableGames);

			console.log(orderedGames);
			setGames(orderedGames);
		} catch (error) {
			setError(true);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return [{ games, setGames, loading, setLoading, error, setError }, getGames];
};
