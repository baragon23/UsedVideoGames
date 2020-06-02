import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from './elements/SearchBar';

const Navigation = () => {
	return (
		<AppBar position="relative">
			<Toolbar variant="dense">
				<Grid container direction="column">
					<Grid item md={12}>
						<Grid container justify="space-between">
							<Typography variant="h6" color="inherit">
								<a href="/">Used Video Games</a>
							</Typography>
							<Typography variant="h6" color="inherit">
								<a href="/#browse">Browse By System</a>
							</Typography>
						</Grid>
					</Grid>
					<Grid item md={12}>
						<SearchBar />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
