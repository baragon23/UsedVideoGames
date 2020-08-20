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
			primary: {
				main: '#00838f' /* teal */,
			},
			secondary: {
				main: '#80deea' /* light green */,
			},
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Navigation setSearchTerm={setSearchTerm} />
			<PageLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
		</ThemeProvider>
	);
};

export default App;
