import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	intro: {
		margin: '2em 0',
		width: '100%',
		height: '100%',
		padding: '2em',
	},
}));

const systems = [
	'3DO',
	'Atari Jaguar',
	'Dreamcast',
	'Game Boy',
	'Game Boy Advance',
	'Game Boy Color',
	'Gamecube',
	'Genesis',
	'Megadrive',
	'Neo Geo',
	'Neo Geo CD',
	'NES',
	'Nintendo DS',
	'N64',
	'PC Engine',
	'PS1',
	'PS2',
	'PS3',
	'PS4',
	'PSP',
	'Saturn',
	'Sega CD',
	'Sega Master System',
	'SNES',
	'Super Famicom',
	'Switch',
	'TG16',
	'Wii',
	'WiiU',
	'Xbox',
	'Xbox 360',
	'Xbox One',
];

const Browse = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Typography variant="h5">Browse By Game System</Typography>
			<Divider />
			<p>Under Construction...</p>
		</Fragment>
	);
};

export default Browse;
