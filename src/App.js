import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Body from './Body';

function App() {
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<Body />
			</Container>
		</Fragment>
	);
}

export default App;
