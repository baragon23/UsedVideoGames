import React from 'react';
import Container from '@material-ui/core/Container';
import Main from './Main';

const PageLayout = () => {
	return (
		<Container maxWidth="md">
			<Main />
			{/* Footer goes here */}
		</Container>
	);
};

export default PageLayout;
