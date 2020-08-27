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
		minWidth: 160,
		flexGrow: 1,
	},
	form: {
		display: 'flex',
		flexGrow: 1,
	},
	searchBox: {
		flexGrow: 2,
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
			<form onSubmit={handleSubmit} ref={searchForm}>
				<Grid container spacing={1} alignItems="center" justify="center">
					<TextField
						autoFocus={true}
						className={classes.searchBox}
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
							<MenuItem aria-label="Dreamcast" value="Dreamcast">
								Dreamcast
							</MenuItem>
							<MenuItem aria-label="Gamecube" value="Gamecube">
								Gamecube
							</MenuItem>
							<MenuItem aria-label="Genesis" value="Genesis">
								Genesis
							</MenuItem>
							<MenuItem aria-label="Megadrive" value="Megadrive">
								Megadrive
							</MenuItem>
							<MenuItem aria-label="Nintendo DS" value="Nintendo DS">
								Nintendo DS
							</MenuItem>
							<MenuItem aria-label="N64" value="N64">
								N64
							</MenuItem>
							<MenuItem aria-label="PS1" value="PS1">
								PS1
							</MenuItem>
							<MenuItem aria-label="PS2" value="PS2">
								PS2
							</MenuItem>
							<MenuItem aria-label="PS3" value="PS3">
								PS3
							</MenuItem>
							<MenuItem aria-label="PS4" value="PS4">
								PS4
							</MenuItem>
							<MenuItem aria-label="PSP" value="PSP">
								PSP
							</MenuItem>
							<MenuItem aria-label="Saturn" value="Saturn">
								Saturn
							</MenuItem>
							<MenuItem aria-label="SNES" value="SNES">
								SNES
							</MenuItem>
							<MenuItem aria-label="Super Famicom" value="Super Famicom">
								Super Famicom
							</MenuItem>
							<MenuItem aria-label="Switch" value="Switch">
								Switch
							</MenuItem>
							<MenuItem aria-label="Wii" value="Wii">
								Wii
							</MenuItem>
							<MenuItem aria-label="WiiU" value="WiiU">
								WiiU
							</MenuItem>
							<MenuItem aria-label="Xbox 360" value="Xbox 360">
								Xbox 360
							</MenuItem>
							<MenuItem aria-label="Xbox One" value="Xbox One">
								Xbox One
							</MenuItem>
						</Select>
					</FormControl>
					<Button type="submit" variant="contained" size="medium" color="secondary">
						Go
					</Button>
				</Grid>
			</form>
		</Fragment>
	);
};

export default withRouter(SearchBar);
