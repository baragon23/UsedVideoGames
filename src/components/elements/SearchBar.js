import React, { Fragment } from 'react';
import { useSearchFetch } from '../hooks/useSearchFetch';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
	dropdown: {
		width: 120,
	},
});

const SearchBar = ({ history, setSearchTerm }) => {
	const [gameSystem, searchForm, handleChange, handleSystemSelect, handleSubmit] = useSearchFetch(
		setSearchTerm,
		history
	);
	const classes = useStyles();

	return (
		<Fragment>
			<form className={classes.form} onSubmit={handleSubmit} ref={searchForm}>
				<Grid container spacing={1} alignItems="center">
					<span>
						<TextField
							autoFocus={true}
							variant="outlined"
							label="Search games"
							required
							color="secondary"
							autoComplete="true"
							size="small"
							onChange={handleChange}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</span>
					<span>
						<FormControl color="secondary" variant="outlined" size="small" className={classes.dropdown}>
							<InputLabel htmlFor="system-dropdown">System</InputLabel>
							<Select
								required
								value={gameSystem}
								onChange={handleSystemSelect}
								label="System"
								inputProps={{
									name: 'system',
									id: 'system-dropdown',
								}}
							>
								<MenuItem aria-label="None" value="" />
								<MenuItem aria-label="PS4" value="PS4">
									PS4
								</MenuItem>
								<MenuItem aria-label="Switch" value="Switch">
									Switch
								</MenuItem>
								<MenuItem aria-label="Xbox One" value="Xbox One">
									Xbox One
								</MenuItem>
								<MenuItem aria-label="Xbox 360" value="Xbox 360">
									Xbox 360
								</MenuItem>
							</Select>
						</FormControl>
					</span>
					<span>
						<Button type="submit" variant="contained" size="medium" color="secondary">
							Go
						</Button>
					</span>
				</Grid>
			</form>
		</Fragment>
	);
};

export default withRouter(SearchBar);
