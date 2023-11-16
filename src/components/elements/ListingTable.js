import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CurrencyFormat from 'react-currency-format';
import { Tooltip } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { colorCyan } from '../../styles/colors';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.primary.main,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const useStyles = makeStyles({
	shipping: {
		color: '#80deea',
		textDecoration: 'none',
	},
	table: {
		minWidth: 650,
	},
	tableSpacing: {
		marginBottom: '2em',
		marginTop: '1em',
		maxHeight: 440,
	},
	tableRow: {
		backgroundColor: '#616161',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: colorCyan,
		},
	},
});

const ListingTable = ({ games }) => {
	const classes = useStyles();
	const [videogames, setVideoGames] = useState([]);

	useEffect(() => {
		let tempArr = [];
		if (games) {
			games.forEach((game, i) => {
				let obj = {};
				let shipping = 0;
				// shipping info is not always provided
				if (game.shippingInfo) {
					if (game.shippingInfo[0].shippingServiceCost) {
						shipping = game.shippingInfo[0].shippingServiceCost[0].__value__;
					}
				}
				obj.id = game.itemId[0];
				obj.url = game.viewItemURL[0];
				obj.price = parseFloat(game.sellingStatus[0].currentPrice[0].__value__) + parseFloat(shipping);
				obj.feedback = `(${game.sellerInfo[0].feedbackScore[0]}) ${game.sellerInfo[0].positiveFeedbackPercent[0]}%`;
				obj.title = game.title[0];
				obj.location = game.location[0];
				tempArr[i] = obj;
			});
		}
		setVideoGames(tempArr);
	}, [games]);

	const handleRowClick = (link) => {
		window.open(link, '_blank');
	};

	return (
		<Fragment>
			<TableContainer component={Paper} className={classes.tableSpacing}>
				<Table className={classes.table} size="small" aria-label="simple table">
					<TableHead>
						<TableRow>
							<StyledTableCell>
								Price (includes shipping{' '}
								<Tooltip
									className={classes.shipping}
									placement="top-end"
									title="Sometimes 
									eBay does not provide shipping cost for specific items for some odd 
									reason and therefore won't be included in the displayed price."
								>
									<span>*</span>
								</Tooltip>{' '}
								)
							</StyledTableCell>
							<StyledTableCell>Seller Feedback</StyledTableCell>
							<StyledTableCell>Description</StyledTableCell>
							<StyledTableCell>Ships From</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{videogames.map((game) => (
							<TableRow
								key={game.id}
								className={classes.tableRow}
								onClick={() => handleRowClick(game.url)}
							>
								<TableCell>
									<CurrencyFormat
										value={game.price}
										displayType={'text'}
										thousandSeparator={true}
										prefix={'$'}
										decimalScale={2}
										fixedDecimalScale={true}
									/>
								</TableCell>
								<TableCell>{game.feedback}</TableCell>
								<TableCell>{game.title}</TableCell>
								<TableCell>{game.location}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
};

export default ListingTable;
