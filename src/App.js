import React, { useState } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navigation from './components/Navigation';
import PageLayout from './components/PageLayout';

const App = () => {
	const [searchTerm, setSearchTerm] = useState([]);

	const darkTheme = createMuiTheme({
		palette: {
			type: 'dark',
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Navigation setSearchTerm={setSearchTerm} />
			<PageLayout searchTerm={searchTerm} />
			{/* Footer goes here */}
			<div style={{ height: '1000px' }}></div>
		</ThemeProvider>
	);
};

export default App;
