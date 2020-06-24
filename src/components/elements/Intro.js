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
	heading: {
		marginBottom: '0.5em',
	},
}));

const Intro = () => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.intro}>
			<Typography variant="h3" className={classes.heading}>
				Search For Used Video Games on eBay
			</Typography>
			<Typography variant="body1">
				Use our search bar up to in the Navigation to find used video games on eBay. Our search tool makes it
				super easy to find the games you are looking for. The results are filtered to be easy to understand.
			</Typography>
		</Paper>
	);
};

export default Intro;
