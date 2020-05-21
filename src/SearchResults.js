import React, { useState } from 'react';

const SearchResults = ({ games }) => {
	return (
		<div>
			{games.length > 0 ? (
				games.map((game) => <div key={game.itemId}>{game.title}</div>)
			) : (
				<h2>No Results Found</h2>
			)}
		</div>
	);
};

export default SearchResults;
