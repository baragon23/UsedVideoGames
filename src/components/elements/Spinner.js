import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	container: {
		padding: '6em 0',
	},
	spinner: {
		border: '10px solid #f3f3f3' /* Light grey */,
		borderTop: '10px solid #009688' /* Blue */,
		borderRadius: '50%',
		width: '8em',
		height: '8em',
		animation: 'spin 0.8s linear infinite',
		margin: '3em auto',
	},
	'@global': {
		'@keyframes spin': {
			'0%': {
				transform: 'rotate(0deg)',
			},
			'100%': {
				transform: 'rotate(360deg)',
			},
		},
	},
});

const Spinner = () => {
	return (
		<div className={useStyles().container}>
			<div className={useStyles().spinner} />
		</div>
	);
};

export default Spinner;
