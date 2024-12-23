import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Visibility } from '@mui/icons-material';
import GreetingDetailDialog from './modalGreeting/GreetingDetailDialog';

import { getGreetings } from '~/services/greetingService';

// Custom pagination actions
function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

// Styled table cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme, isEven }) => ({
    backgroundColor: isEven ? theme.palette.action.hover : 'transparent',
    '&:hover': {
        backgroundColor: theme.palette.action.selected,
    },
}));

// Sample data

export default function GreetingTable() {
    const [rows, setRows] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const [isOrderDetailDialogOpen, setIsOrderDetailDialogOpen] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = React.useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile breakpoint

    React.useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            try {
                const data = await getGreetings();
                console.log('Data fetched:', data);
                setRows(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Define columns with responsive visibility
    const columns = isMobile
        ? [
              { id: 'id', label: 'ID', width: '20%' },
              { id: 'sender', label: 'Người gửi', width: '50%' },
              { id: 'seeDetail', label: 'Chi tiết', width: '30%' },
          ]
        : [
              { id: 'id', label: 'ID', width: '10%' },
              { id: 'sender', label: 'Người gửi', width: '20%' },
              { id: 'message', label: 'Lời chúc', width: '60%' },
              { id: 'seeDetail', label: 'Chi tiết', width: '10%' },
          ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOpenOrderDetailDialog = (order) => {
        setSelectedOrder(order);
        setIsOrderDetailDialogOpen(true);
    };

    const handleCloseOrderDetailDialog = () => {
        setIsOrderDetailDialogOpen(false);
        setSelectedOrder(null);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', padding: 2 }}>
            <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
                <Table sx={{ minWidth: isMobile ? 250 : 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell key={column.id} align="center" style={{ width: column.width }}>
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.Id} isEven={isEven}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return column.id === 'seeDetail' ? (
                                            <TableCell key={column.id} align="center">
                                                <Visibility
                                                    style={{
                                                        cursor: 'pointer',
                                                        fontSize: 20,
                                                    }}
                                                    onClick={() => handleOpenOrderDetailDialog(row)}
                                                />
                                            </TableCell>
                                        ) : (
                                            <TableCell key={column.id} align="center">
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            {isMobile ? (
                                <TablePagination
                                    colSpan={2}
                                    count={rows.length}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    rowsPerPage={8}
                                    rowsPerPageOptions={[8]}
                                    
                                />
                            ) : (
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={columns.length}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            )}
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>

            {selectedOrder && (
                <GreetingDetailDialog
                    open={isOrderDetailDialogOpen}
                    onClose={handleCloseOrderDetailDialog}
                    greeting={selectedOrder}
                />
            )}
        </Paper>
    );
}
