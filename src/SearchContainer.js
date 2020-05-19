import React, { useState, Fragment } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';

const endpoint = 'https://svcs.ebay.com/services/search/FindingService/v1';

const SearchContainer = () => {
	const [query, setQuery] = useState('');
	const [games, setGames] = useState([]);

	const handleChange = (event) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

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
			&keywords=${query}
		`;

		let games = getGames(apiCall);
		setGames(games);
	};

	const getGames = async (apiCall) => {
		let response = await fetch(apiCall);
		let videogames = await response.json();

		let filteredGames = videogames.findItemsAdvancedResponse[0].searchResult[0].item.filter(
			(item) => {
				return item.country[0] === 'US';
			}
		);
		return filteredGames;
	};

	return (
		<Fragment>
			<Search handleChange={handleChange} handleSubmit={handleSubmit} />
			<SearchResults />
		</Fragment>
	);
};

export default SearchContainer;
