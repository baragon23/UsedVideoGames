import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
		marginTop: '3em',
		maxHeight: 440,
	},
});

const Grid = ({ games }) => {
	const classes = useStyles();
	console.log(games);

	return (
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
						<TableRow key={game.itemId[0]}>
							<TableCell>{game.sellingStatus[0].currentPrice[0].__value__}</TableCell>
							<TableCell>{`(${game.sellerInfo[0].feedbackScore[0]}) ${game.sellerInfo[0].positiveFeedbackPercent[0]}`}</TableCell>
							<TableCell>{game.title[0]}</TableCell>
							<TableCell>{game.location[0]}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Grid;
