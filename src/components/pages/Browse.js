import React, { Fragment, useEffect } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useGetPlatforms } from '../hooks/useGetPlatforms';
import Spinner from '../elements/Spinner';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	pform: {
		flexBasis: 0,
	},
	platformContainer: {
		height: '60vh',
		margin: '2em 0',
	},
}));

const Browse = ({ setId, setName }) => {
	const [{ platforms, loading, setLoading, error, setError }, getPlatforms] = useGetPlatforms();

	useEffect(() => {
		getPlatforms();
		return () => {
			setLoading(false);
			setError('');
		};
		// eslint-disable-next-line
	}, []);

	const handleClick = (id, name) => {
		console.log(typeof setId);
		setId(id);
		setName(name);
	};

	const { pform, platformContainer } = useStyles();

	if (error) return <h2>Error loading platforms. Please try again later.</h2>;
	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Typography variant="h5" gutterBottom={true}>
				Browse By Game Platform
			</Typography>
			<Divider />
			<Grid container direction="column" spacing={2} className={platformContainer}>
				{platforms.map((platform) => {
					return (
						<Grid item xs={3} key={`${platform.id}-platform`} className={pform}>
							<Link to="/games" onClick={() => handleClick(platform.id, platform.name)}>
								{platform.name}
							</Link>
						</Grid>
					);
				})}
			</Grid>
		</Fragment>
	);
};

export default withRouter(Browse);
