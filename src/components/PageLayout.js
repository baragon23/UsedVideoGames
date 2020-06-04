import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import Browse from './Pages/Browse';
import Home from './Pages/Home';
import Results from './Pages/Results';

const PageLayout = ({ searchTerm }) => {
	return (
		<Container maxWidth="md">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/results">
					<Results searchTerm={searchTerm} />
				</Route>
				<Route path="/browse">
					<Browse />
				</Route>
			</Switch>
		</Container>
	);
};

export default PageLayout;
