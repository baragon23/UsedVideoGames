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
		{ id: 19, name: 'PS5' },
		{ id: 20, name: 'PSP' },
		{ id: 21, name: 'Saturn' },
		{ id: 22, name: 'Sega CD' },
	],
	[
		{ id: 23, name: 'Sega Master System' },
		{ id: 24, name: 'SNES' },
		{ id: 25, name: 'Super Famicom' },
		{ id: 26, name: 'Switch' },
		{ id: 27, name: 'TG16' },
		{ id: 28, name: 'Wii' },
		{ id: 29, name: 'WiiU' },
		{ id: 30, name: 'Xbox' },
		{ id: 31, name: 'Xbox 360' },
		{ id: 32, name: 'Xbox One' },
		{ id: 33, name: 'Xbox Series X' },
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
