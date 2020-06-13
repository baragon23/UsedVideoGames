import React, { useEffect, useState } from 'react';
import { useGetGames } from '../hooks/useGetGames';

const Results = ({ searchTerm }) => {
	const [{ games, setGames, loading, setLoading, error, setError }, getGames] = useGetGames(searchTerm);
	const [game] = useState({ new: ['hi'], likeNew: ['hey', 'yo'], veryGood: [] });

	useEffect(() => {
		getGames();
		return () => {
			setGames([]);
			setLoading(false);
			setError('');
		};
	}, [searchTerm]);

	if (error) return <h2>Error getting games from api</h2>;
	if (loading) return <h2>Loading........</h2>; // or return spinner here

	return (
		<div>
			<h2>Results for: {searchTerm}</h2>
			<div>
				{/*games.length > 0 ? (
					games.map((game) => {
						return (
							<div key={game.itemId}>
								<div>{game.title}</div>
								<div>{
									
								}</div>
							</div>
						);
					})
				) : (
					<h2>No Results Found</h2>
				)*/}
			</div>
		</div>
	);
};

export default Results;
