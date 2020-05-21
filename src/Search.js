import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	textField: {
		width: '100%',
		backgroundColor: 'aliceblue',
	},
	form: {
		width: '100%',
	},
	dropdown: {
		minWidth: 120,
		backgroundColor: 'aliceblue',
	},
	button: {
		height: '100%',
	},
});

const Search = ({ handleChange, handleSubmit, searchForm, gameSystem, handleSystemSelect }) => {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h2">Search Used Video Games on eBay</Typography>
			<form className={classes.form} onSubmit={handleSubmit} ref={searchForm}>
				<Grid container spacing={1}>
					<Grid item sm={9}>
						<TextField
							id="outlined-basic"
							onChange={handleChange}
							className={classes.textField}
							label="Search for video game"
							variant="outlined"
							required
							inputRef={(input) => input && input.focus()}
						/>
					</Grid>
					<Grid item sm={2}>
						<FormControl variant="outlined" className={classes.dropdown}>
							<InputLabel htmlFor="system-dropdown">System</InputLabel>
							<Select
								native
								required
								value={gameSystem}
								onChange={handleSystemSelect}
								label="System"
								inputProps={{
									name: 'system',
									id: 'system-dropdown',
								}}
							>
								<option aria-label="None" value="" />
								<option value="PS4">PS4</option>
								<option value="Switch">Switch</option>
								<option value="Xbox One">Xbox One</option>
							</Select>
						</FormControl>
					</Grid>
					<Grid item sm={1}>
						<Button
							type="submit"
							variant="contained"
							size="large"
							color="primary"
							className={classes.button}
						>
							Go
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default Search;
