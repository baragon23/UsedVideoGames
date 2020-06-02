import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './components/Navigation';
import PageLayout from './PageLayout';

function App() {
	return (
		<Fragment>
			<CssBaseline />
			<Navigation />
			<PageLayout />
			{/* Footer goes here */}
			<div style={{ height: '1000px' }}></div>
		</Fragment>
	);
}

export default App;
