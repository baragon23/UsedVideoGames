import { useState, useRef } from 'react';
import { SEARCH_BASE_URL } from '../../config';

export const useSearchFetch = (searchTerm) => {
	const [games, setGames] = useState();

	const getGames = async () => {
		const endpoint = `${SEARCH_BASE_URL}${searchTerm}`;

		try {
			let response = await fetch(endpoint);
			response = await response.json();
			let videogames = response.findItemsAdvancedResponse[0].searchResult[0].item || [];
			// let gamesReturned = response.findItemsAdvancedResponse[0].searchResult[0]['@count'] || 0;

			let filteredGames = videogames.filter((game) => {
				return game.country[0] === 'US';
			});
			console.log(filteredGames);
			setGames(filteredGames);
		} catch (error) {
			console.error(error);
		}
	};

	return getGames;
};
