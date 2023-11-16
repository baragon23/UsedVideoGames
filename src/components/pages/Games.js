import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Spinner from '../elements/Spinner';
import { useGetPlatformGames } from '../hooks/useGetPlatformGames';
import { withRouter } from 'react-router-dom';

const Games = ({ history, id, name, setSearchTerm }) => {
	const [{ games, loading, setLoading, error, setError }, getPlatformGames] = useGetPlatformGames();

	useEffect(() => {
		getPlatformGames(id);
		return () => {
			setLoading(false);
			setError('');
		};
		// eslint-disable-next-line
	}, []);

	const handleClick = (gameName) => {
		setSearchTerm(`${name} ${gameName}`);
		history.push('/results');
	};

	if (error) return <h2>Error loading platforms. Please try again later.</h2>;
	if (loading) return <Spinner />;
	if (!games) return <h4>No games data.</h4>;

	return (
		<Grid>
			<Typography variant="h6">{name} Used Video Games for Sale</Typography>
			<Grid item>
				{games.map((game, i) => {
					return (
						<p onClick={() => handleClick(game.name)} key={`${game.name}-${i}`}>
							{game.name}
						</p>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default withRouter(Games);
