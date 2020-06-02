import React from 'react';
import { useSearchFetch } from '../hooks/useSearchFetch';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

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
		width: '100%',
	},
});

const SearchBar = () => {
	const [gameSystem, games, searchForm, handleChange, handleSystemSelect, handleSubmit, getGames] = useSearchFetch();
	const classes = useStyles();

	return (
		<div>
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
								<option value="Microsoft Xbox One X">Microsoft Xbox One X</option>
							</Select>
						</FormControl>
					</Grid>
					<Grid item sm={1}>
						<Button
							type="submit"
							variant="contained"
							size="medium"
							color="secondary"
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

export default SearchBar;
