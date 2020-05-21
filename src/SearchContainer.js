import React, { useState, Fragment, useRef } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';

const endpoint = 'https://svcs.ebay.com/services/search/FindingService/v1';

const SearchContainer = () => {
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
		setGames([]);

		const searchQuery = `${gameSystem} ${query}`;

		const apiCall = `${endpoint}?
			OPERATION-NAME=findItemsAdvanced
			&SECURITY-APPNAME=Benjamin-VideoGam-PRD-83882c164-4d873162
			&GLOBAL-ID=EBAY-US
			&RESPONSE-DATA-FORMAT=JSON
			&REST-PAYLOAD
			&SERVICE-VERSION=1.0.0
			&outputSelector(0)=SellerInfo
			&outputSelector(1)=ListingInfo
			&categoryId=139973
			&itemFilter(0).name=ListingType
			&itemFilter(0).value(0)=FixedPrice
			&itemFilter(0).value(1)=StoreInventory
			&keywords=${searchQuery}
		`;

		getGames(apiCall);
	};

	const getGames = async (apiCall) => {
		try {
			let response = await fetch(apiCall);
			response = await response.json();
			let videogames = response.findItemsAdvancedResponse[0].searchResult[0].item || [];
			let gamesReturned = response.findItemsAdvancedResponse[0].searchResult[0]['@count'] || 0;

			if (gamesReturned > 0) {
				let filteredGames = videogames.filter((game) => {
					return game.country[0] === 'US';
				});
				setGames(filteredGames);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Fragment>
			<Search
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchForm={searchForm}
				gameSystem={gameSystem}
				handleSystemSelect={handleSystemSelect}
			/>
			<SearchResults games={games} />
		</Fragment>
	);
};

export default SearchContainer;
