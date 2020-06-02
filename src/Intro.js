import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	intro: {
		margin: '2em 0',
		width: '100%',
		height: '100%',
		padding: '1em',
	},
}));

const Intro = () => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.intro}>
			<Typography variant="h3">Search For Used Video Games on eBay</Typography>
			<Typography variant="h6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in{' '}
			</Typography>
		</Paper>
	);
};

export default Intro;
