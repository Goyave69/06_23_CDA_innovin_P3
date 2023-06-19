import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import PropTypes from "prop-types";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const headCells = [
  {
    id: "id",
    label: "Id",
  },
  {
    id: "firstname",
    label: "Prénom",
  },
  {
    id: "lastname",
    label: "Nom",
  },
  {
    id: "username",
    label: "Pseudo",
  },
  {
    id: "role",
    label: "Rôle",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "adress",
    label: "Adresse",
  },
  {
    id: "phone",
    label: "Téléphone",
  },
];

export default function UserTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span">
                  {order === "desc" ? (
                    <ArrowDownwardIcon />
                  ) : (
                    <ArrowUpwardIcon />
                  )}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell key="Toolbox" align="center" padding="normal">
          Boite à outils
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

UserTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};
