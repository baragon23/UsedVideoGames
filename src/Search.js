import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	textField: {
		width: '50%',
		border: '2px solid red',
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	},
	form: {
		width: '100%',
	},
});

const Search = ({ handleChange, handleSubmit }) => {
	const classes = useStyles();

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Typography variant="h2">Search For Used Video Games</Typography>
			<form className={classes.form} onSubmit={handleSubmit}>
				<TextField
					onChange={handleChange}
					className={classes.textField}
					label="Type your video game title here..."
				/>
				<button onClick={handleSubmit}>Go</button>
			</form>
		</Grid>
	);
};

export default Search;
