import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	footer: {
		bottom: 0,
		height: '3vh',
		textAlign: 'center',
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="md" className={classes.footer}>
			<Typography variant="caption">Copyright 2020 UsedVideo.Games</Typography>
		</Container>
	);
};

export default Footer;
