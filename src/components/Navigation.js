import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from './elements/SearchBar';

const Navigation = ({ setSearchTerm }) => {
	return (
		<AppBar position="relative">
			<Toolbar variant="dense">
				<Grid container direction="column">
					<Grid item md={12}>
						<Grid container justify="space-between">
							<Typography variant="h6" color="inherit">
								<Link to="/">Used Video Games</Link>
							</Typography>
							<Typography variant="h6" color="inherit">
								<Link to="/browse">Browse By System</Link>
							</Typography>
						</Grid>
					</Grid>
					<Grid item md={12}>
						<SearchBar setSearchTerm={setSearchTerm} />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
