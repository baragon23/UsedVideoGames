import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import GamePad from '@material-ui/icons/SportsEsports';
import Typography from '@material-ui/core/Typography';

import Intro from '../elements/Intro';

const useStyles = makeStyles({
	topBG: {
		backgroundColor: '#009688',
		paddingTop: '3em',
		height: '35vh',
	},
	title: {
		display: 'flex',
		alignItems: 'center',
		'& svg': {
			height: '3em',
			width: '3em',
		},
		'& h3': {
			margin: '0',
		},
	},
	subTitle: {
		marginTop: '1.3em',
		marginBottom: '2.6em',
	},
});

const Home = ({ setSearchTerm }) => {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.topBG}>
				<Container maxWidth="md">
					<div className={classes.title}>
						<GamePad />
						<Typography variant="h3">Used Video Games</Typography>
					</div>
					<Typography variant="h6" className={classes.subTitle}>
						EASIEST WAY TO SEARCH EBAY'S WEBSITE FOR USED VIDEO GAMES
					</Typography>
					<Intro setSearchTerm={setSearchTerm} />
				</Container>
			</div>
		</Fragment>
	);
};

export default Home;
