import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import * as React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UserTableHead from "./UserTableHead";
import UserTableToolbar from "./UserTableToolbar";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function UserTable({ users, setLoadingUsers }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const visibleUsers = React.useMemo(
    () =>
      stableSort(users, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, users]
  );

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        setLoadingUsers((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <UserTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <UserTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleUsers.map((user) => (
                <TableRow hover key={user.id} sx={{ cursor: "pointer" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="normal"
                    align="center"
                  >
                    {user.id}
                  </TableCell>
                  <TableCell align="center" padding="normal">
                    {user.firstname}
                  </TableCell>
                  <TableCell align="center" padding="normal">
                    {user.lastname}
                  </TableCell>
                  <TableCell align="center" padding="normal">
                    {user.username}
                  </TableCell>
                  <TableCell align="center" padding="normal">
                    {user.role}
                  </TableCell>
                  <TableCell align="center" padding="normal">
                    {user.email}
                  </TableCell>
                  <TableCell align="center" padding="normal">
                    {user.address}
                  </TableCell>
                  <TableCell align="center" padding="normal">
                    {user.phone}
                  </TableCell>
                  <TableCell align="center" padding="normal">
                    <Tooltip>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip>
                      <IconButton
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      cart_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  setLoadingUsers: PropTypes.func.isRequired,
};
