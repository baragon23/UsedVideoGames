import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import SearchContainer from './SearchContainer';

function App() {
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<SearchContainer />
			</Container>
		</Fragment>
	);
}

export default App;
