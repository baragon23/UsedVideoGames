import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navigation = () => {
	return (
		<AppBar position="relative">
			<Toolbar variant="dense">
				<Grid container direction="row" justify="space-between">
					<Typography variant="h6" color="inherit">
						<a href="/">Used Video Games</a>
					</Typography>
					<Typography variant="h6" color="inherit">
						Browse By System
					</Typography>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
