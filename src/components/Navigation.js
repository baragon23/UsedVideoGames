import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Headroom from 'react-headroom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import Toolbar from '@material-ui/core/Toolbar';

import SearchBar from './elements/SearchBar';

const useStyles = makeStyles({
	link: {
		color: '#fff',
		textDecoration: 'none',
	},
	container: {
		height: '100%',
	},
});

const Navigation = ({ setSearchTerm }) => {
	const classes = useStyles();

	return (
		<Headroom>
			<AppBar position="relative">
				<Toolbar variant="dense">
					<Container maxWidth="lg">
						<Grid container justify="space-between">
							<Grid item>
								<Grid container alignItems="center" className={classes.container}>
									<Button size="large" startIcon={<HomeIcon />}>
										<Link to="/" className={classes.link}>
											Home
										</Link>
									</Button>
									<Button size="large" startIcon={<HorizontalSplitIcon />}>
										<Link to="/browse" className={classes.link}>
											Browse By System
										</Link>
									</Button>
								</Grid>
							</Grid>
							<Grid item>
								<SearchBar setSearchTerm={setSearchTerm} />
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</Headroom>
	);
};

export default Navigation;
