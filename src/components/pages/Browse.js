import React, { Fragment } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const listOfSystems = [
	[
		{ id: 1, name: '3DO' },
		{ id: 2, name: 'Atari Jaguar' },
		{ id: 3, name: 'Dreamcast' },
		{ id: 4, name: 'Game Boy' },
		{ id: 5, name: 'Game Boy Advance' },
		{ id: 6, name: 'Game Boy Color' },
		{ id: 7, name: 'Gamecube' },
		{ id: 8, name: 'Genesis' },
		{ id: 9, name: 'Megadrive' },
		{ id: 10, name: 'Neo Geo' },
		{ id: 11, name: 'Neo Geo CD' },
	],
	[
		{ id: 12, name: 'NES' },
		{ id: 13, name: 'Nintendo DS' },
		{ id: 14, name: 'PC Engine' },
		{ id: 15, name: 'PS1' },
		{ id: 16, name: 'PS2' },
		{ id: 17, name: 'PS3' },
		{ id: 18, name: 'PS4' },
		{ id: 19, name: 'PSP' },
		{ id: 20, name: 'Saturn' },
		{ id: 21, name: 'Sega CD' },
	],
	[
		{ id: 21, name: 'Sega Master System' },
		{ id: 22, name: 'SNES' },
		{ id: 23, name: 'Super Famicom' },
		{ id: 24, name: 'Switch' },
		{ id: 25, name: 'TG16' },
		{ id: 26, name: 'Wii' },
		{ id: 27, name: 'WiiU' },
		{ id: 28, name: 'Xbox' },
		{ id: 29, name: 'Xbox 360' },
		{ id: 30, name: 'Xbox One' },
	],
];

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridColumnGap: '1em',
		marginTop: '2em',
		marginBottom: '2em',
		// eslint-disable-next-line
		['@media (max-width: 480px)']: {
			gridTemplateColumns: '1fr',
		},
	},
	system: {
		margin: '1em 0',
	},
}));

const Browse = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Typography variant="h5" gutterBottom={true}>
				Browse By Game System
			</Typography>
			<Divider />
			<Container className={classes.root}>
				{listOfSystems.map((systems, index) => (
					<Grid key={index + 'a'} container direction="column" alignItems="center">
						{systems.map((system) => (
							<div key={system.id} className={classes.system}>
								{system.name}
							</div>
						))}
					</Grid>
				))}
			</Container>
		</Fragment>
	);
};

export default Browse;
