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
			<Typography variant="h6">Under Construction</Typography>
		</Paper>
	);
};

export default Intro;
