import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Intro from '../elements/Intro';
import Browse from './Browse';

const useStyles = makeStyles({
	line: {
		borderBottom: '2px solid rgba(255, 255, 255, 0.25)',
		display: 'flex',
		justifyContent: 'center',
		margin: '4em 0 3em 0',
		position: 'relative',
	},
	or: {
		backgroundColor: '#303030',
		lineHeight: 1,
		margin: 0,
		padding: '0 0.5em',
		position: 'absolute',
		top: '-0.5em',
		whiteSpace: 'nowrap',
	},
});

const Home = ({ setSearchTerm, setId, setName }) => {
	const classes = useStyles();

	return (
		<Container maxWidth="md">
			<Intro setSearchTerm={setSearchTerm} />
			<Container className={classes.line}>
				<Typography variant="h4" className={classes.or}>
					or
				</Typography>
			</Container>
			<Browse setId={setId} setName={setName} />
		</Container>
	);
};

export default Home;
