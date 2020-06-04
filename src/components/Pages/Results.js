import React from 'react';

const Results = ({ searchTerm }) => {
	return (
		<div>
			<h2>Results:</h2>
			Searching for: {searchTerm}
			<div>
				{/*games.length > 0 ? (
					games.map((game) => <div key={game.itemId}>{game.title}</div>)
				) : (
					<h2>No Results Found</h2>
				)*/}
			</div>
		</div>
	);
};

export default Results;
