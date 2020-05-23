import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './Navigation';
import PageLayout from './PageLayout';

function App() {
	return (
		<Fragment>
			<CssBaseline />
			<Navigation />
			<PageLayout />
		</Fragment>
	);
}

export default App;
