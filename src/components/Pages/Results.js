import React, { useEffect, useState } from 'react';
import { useGetGames } from '../hooks/useGetGames';

import Grid from '../elements/Grid';
import Spinner from '../elements/Spinner';

const Results = ({ searchTerm }) => {
	const [{ games, setGames, loading, setLoading, error, setError }, getGames] = useGetGames(searchTerm);

	useEffect(() => {
		getGames();
		return () => {
			setGames([]);
			setLoading(false);
			setError('');
		};
	}, [searchTerm]);

	if (error) return <h2>Error loading games from eBay</h2>;
	if (loading) return <Spinner />;

	return (
		<div>
			<h2>Results for: {searchTerm}</h2>
			<div>
				{games.length > 0 ? (
					games.map((gameGroup, index) => {
						return <Grid games={gameGroup} key={index} />;
					})
				) : (
					<h2>There are currently no listings for that game on eBay.</h2>
				)}
			</div>
		</div>
	);
};

export default Results;
