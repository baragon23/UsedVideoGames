import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	textField: {
		width: '50%',
		border: '2px solid red',
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	},
	form: {
		width: '100%',
	},
});

const Body = () => {
	const [query, setQuery] = useState('');

	const handleChange = (event) => {
		// console.log(event.target.value);

		setQuery(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(query);
		const endpoint =
			'https://svcs.ebay.com/services/search/FindingService/v1';

		const apiCall = `${endpoint}?
			OPERATION-NAME=findItemsAdvanced
			&SECURITY-APPNAME=Benjamin-VideoGam-PRD-83882c164-4d873162
			&GLOBAL-ID=EBAY-US
			&RESPONSE-DATA-FORMAT=JSON
			&REST-PAYLOAD
			&SERVICE-VERSION=1.0.0
			&outputSelector(0)=SellerInfo
			&outputSelector(1)=ListingInfo
			&categoryId=139973
			&itemFilter(0).name=ListingType
			&itemFilter(0).value(0)=FixedPrice
			&itemFilter(0).value(1)=StoreInventory
			&keywords=${query}
		`;

		fetch(apiCall)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(
					data.findItemsAdvancedResponse[0].searchResult[0].item.filter(
						(item) => {
							return item.country[0] === 'US';
						}
					)
				);
			})
			.catch((error) => {
				console.log('Error: ' + error);
			});
	};

	const classes = useStyles();

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Typography variant="h2">Search For Used Video Games</Typography>
			<form className={classes.form} onSubmit={handleSubmit}>
				<TextField
					onChange={handleChange}
					className={classes.textField}
					label="Type your video game title here..."
				/>
				<button onClick={handleSubmit}>Go</button>
			</form>
		</Grid>
	);
};

export default Body;
