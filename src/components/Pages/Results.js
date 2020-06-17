import React, { useEffect } from 'react';
import { useGetGames } from '../hooks/useGetGames';
import { makeStyles } from '@material-ui/core/styles';

import { CONDITIONS } from '../../config';

import InfoIcon from '@material-ui/icons/Info';
import ListingTable from '../elements/ListingTable';
import Spinner from '../elements/Spinner';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	noGames: {
		display: 'flex',
		alignItems: 'center',
	},
	infoIcon: {
		marginRight: '0.5em',
	},
});

const Results = ({ searchTerm }) => {
	const [{ games, setGames, loading, setLoading, error, setError }, getGames] = useGetGames(searchTerm);
	const classes = useStyles();

	useEffect(() => {
		getGames();
		return () => {
			setGames([]);
			setLoading(false);
			setError('');
		};
		// eslint-disable-next-line
	}, [searchTerm]);

	if (error) return <h2>Error loading games from eBay. Please try again later.</h2>;
	if (loading) return <Spinner />;

	return (
		<div>
			<Typography variant="h3">Results for: {searchTerm}</Typography>
			{games.map((gameGroup, index) => {
				return (
					<div key={index}>
						<Typography variant="h4">{CONDITIONS[index]}</Typography>
						{gameGroup.length > 0 ? (
							<ListingTable games={gameGroup} key={index} />
						) : (
							<p className={classes.noGames}>
								<InfoIcon className={classes.infoIcon} />
								No games currently for sale in {CONDITIONS[index]} condition.
							</p>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Results;
