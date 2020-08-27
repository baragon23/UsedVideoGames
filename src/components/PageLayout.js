import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GamePad from '@material-ui/icons/SportsEsports';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Browse from './pages/Browse';
import Home from './pages/Home';
import Results from './pages/Results';

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: '0 0 2em 0',
		width: '100%',
		height: '100%',
		padding: '2em',
	},
	topBG: {
		backgroundColor: theme.palette.primary.main,
		paddingTop: '3em',
		height: '35vh',
	},
	title: {
		display: 'flex',
		alignItems: 'center',
		'& svg': {
			height: '3em',
			marginRight: '1em',
			filter: 'drop-shadow(5px 5px 0px #00695c)',
			width: '3em',
		},
		'& h3': {
			margin: '0',
			textShadow: '4px 3px 0 #00695c, 7px 5px 0 rgba(0, 0, 0, 0.15)',
		},
	},
	subTitle: {
		marginTop: '1.3em',
		marginBottom: '2.6em',
	},
}));

const PageLayout = ({ searchTerm, setSearchTerm }) => {
	const classes = useStyles();

	return (
		<div className={classes.topBG}>
			<Container maxWidth="md">
				<Container maxWidth="md">
					<div className={classes.title}>
						<GamePad />
						<Typography variant="h3">Used Video Games</Typography>
					</div>
					<Typography variant="h6" className={classes.subTitle}>
						EASIEST WAY TO SEARCH EBAY FOR USED VIDEO GAMES
					</Typography>
				</Container>
				<Switch>
					<Route exact path="/">
						<Home setSearchTerm={setSearchTerm} />
					</Route>
					<Route path="/results">
						<Paper elevation={3} className={classes.intro}>
							<Results searchTerm={searchTerm} />
						</Paper>
					</Route>
					<Route path="/browse">
						<Paper elevation={3} className={classes.paper}>
							<Browse />
						</Paper>
					</Route>
				</Switch>
			</Container>
		</div>
	);
};

export default PageLayout;
