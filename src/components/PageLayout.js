import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Browse from './Pages/Browse';
import Home from './Pages/Home';
import Results from './Pages/Results';

const PageLayout = ({ searchTerm, setSearchTerm }) => {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Home setSearchTerm={setSearchTerm} />
				</Route>
				<Route path="/results">
					<Results searchTerm={searchTerm} />
				</Route>
				<Route path="/browse">
					<Browse />
				</Route>
			</Switch>
		</div>
	);
};

export default PageLayout;
