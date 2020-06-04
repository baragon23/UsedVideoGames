import React, { Fragment } from 'react';

import Browse from './Browse';
import Intro from '../elements/Intro';

const Home = () => {
	return (
		<Fragment>
			<Intro />
			<Browse />
		</Fragment>
	);
};

export default Home;
