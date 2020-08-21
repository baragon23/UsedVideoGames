import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const rowHighlight = cyan['600']; // #ff8a80

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.primary.main,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	tableSpacing: {
		marginBottom: '2em',
		marginTop: '1em',
		maxHeight: 440,
	},
	tableRow: {
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: rowHighlight,
		},
	},
});

const ListingTable = ({ games }) => {
	const classes = useStyles();

	const handleRowClick = (link) => {
		window.open(link, '_blank');
	};

	return (
		<Fragment>
			<TableContainer component={Paper} className={classes.tableSpacing}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Price (includes shipping)</StyledTableCell>
							<StyledTableCell>Seller Feedback</StyledTableCell>
							<StyledTableCell>Description</StyledTableCell>
							<StyledTableCell>Ships From</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{games.map((game) => (
							<TableRow
								key={game.itemId[0]}
								className={classes.tableRow}
								onClick={() => handleRowClick(game.viewItemURL[0])}
							>
								<TableCell>{`$${game.sellingStatus[0].currentPrice[0].__value__}`}</TableCell>
								<TableCell>{`(${game.sellerInfo[0].feedbackScore[0]}) ${game.sellerInfo[0].positiveFeedbackPercent[0]}%`}</TableCell>
								<TableCell>{game.title[0]}</TableCell>
								<TableCell>{game.location[0]}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
};

export default ListingTable;
