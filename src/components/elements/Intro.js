import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
	intro: {
		margin: '2em 0',
		width: '100%',
		height: '100%',
		padding: '2em',
	},
	heading: {},
	subText: {
		marginTop: '1em',
	},
	searchBar: {
		marginTop: '2em',
	},
	boxes: {
		display: 'grid',
		gridColumnGap: '1.25em',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		marginTop: '2em',
	},
}));

const Intro = ({ setSearchTerm }) => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.intro}>
			<Typography variant="h5" className={classes.heading}>
				Video Game Search Bar
			</Typography>
			<Divider />
			<Typography variant="body1" className={classes.subText}>
				Our search tool is the easiest and fastest way to find video games on Ebay's website. You no longer have
				to wade through endless filters and hard-to-read results because we take care of all of that for you.
			</Typography>
			<div className={classes.searchBar}>
				<SearchBar setSearchTerm={setSearchTerm} isHomePage={true} />
			</div>
			<div className={classes.boxes}>
				<div>
					<Typography variant="body2">Condition</Typography>
					<Typography variant="caption">
						Video game results are grouped in the condition the game is in: New, Like New, Very Good, Good,
						Acceptable.
					</Typography>
				</div>
				<div>
					<Typography variant="body2">Buy It Now</Typography>
					<Typography variant="caption">
						Video games which support the Buy It Now feature, will only show up in the results.
					</Typography>
				</div>
				<div>
					<Typography variant="body2">US Only</Typography>
					<Typography variant="caption">
						Only video games from U.S. sellers will show up in the results.
					</Typography>
				</div>
				<div>
					<Typography variant="body2">Feedback</Typography>
					<Typography variant="caption">
						The seller's feedback is displayed conviniently next to each game.
					</Typography>
				</div>
			</div>
		</Paper>
	);
};

export default Intro;
