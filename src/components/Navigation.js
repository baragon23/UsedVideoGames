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
		textDecoration: 'none',
	},
	itemContainer: {
		// eslint-disable-next-line
		['@media (max-width: 768px)']: {
			paddingBottom: '1em',
		},
	},
	linkContainer: {
		// eslint-disable-next-line
		['@media (max-width: 768px)']: {
			paddingBottom: '1em',
		},
	},
});

const Navigation = ({ setSearchTerm }) => {
	const classes = useStyles();

	return (
		<Headroom>
			<AppBar position="relative">
				<Toolbar>
					<Container maxWidth="lg">
						<Grid container justify="space-between" className={classes.itemContainer}>
							<Grid item className={classes.linkContainer}>
								<Grid container alignItems="center">
									<Link to="/" className={classes.link}>
										<Button size="large" startIcon={<HomeIcon />}>
											Home
										</Button>
									</Link>
									<Link to="/browse" className={classes.link}>
										<Button size="large" startIcon={<HorizontalSplitIcon />}>
											Browse By System
										</Button>
									</Link>
								</Grid>
							</Grid>
							<Grid item style={{ display: 'flex', alignItems: 'center' }}>
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
