import React from 'react';
import Container from '@material-ui/core/Container';
import Intro from './Intro';
import Main from './Main';

const PageLayout = () => {
	return (
		<Container maxWidth="md">
			<Intro />
			<Main />
		</Container>
	);
};

export default PageLayout;
