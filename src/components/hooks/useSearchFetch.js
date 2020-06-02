import { useState, useRef } from 'react';
import { SEARCH_BASE_URL } from '../../config';

export const useSearchFetch = () => {
	const [query, setQuery] = useState('');
	const [games, setGames] = useState([]);
	const [gameSystem, setGameSystem] = useState('');
	const searchForm = useRef();

	const handleChange = (event) => {
		setQuery(event.target.value);
	};

	const handleSystemSelect = (event) => {
		setGameSystem(event.target.value);
	};

	const handleSubmit = (event) => {
		searchForm.current.reportValidity();
		event.preventDefault();

		// reset results upon a new user query
		//setGames([]);

		const searchQuery = `${gameSystem} ${query}`;
		const endpoint = `${SEARCH_BASE_URL}${searchQuery}`;

		getGames(endpoint);
	};

	const getGames = async (endpoint) => {
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

	return [gameSystem, games, searchForm, handleChange, handleSystemSelect, handleSubmit, getGames];
};
