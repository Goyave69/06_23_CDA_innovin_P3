import { DataGrid } from "@mui/x-data-grid";
import {
  Container,
  Stack,
  Typography,
  Button,
  Modal,
  Box,
  Link,
  Tooltip,
  IconButton,
} from "@mui/material";
import * as React from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import UserForm from "./UserForm";

export default function AdminUser() {
  const [users, setUsers] = React.useState([]);
  const [loadingUsers, setLoadingUsers] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [loadingUsers]);

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

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstname",
      headerName: "Prénom",
      width: 110,
      editable: true,
    },
    {
      field: "lastname",
      headerName: "Nom",
      width: 110,
      editable: true,
    },
    {
      field: "username",
      headerName: "Pseudo",
      width: 110,
      editable: true,
    },
    {
      field: "role",
      headerName: "Rôle",
      width: 110,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "Adresse",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Téléphone",
      width: 110,
      editable: true,
    },
    {
      field: "delete",
      headerName: "Supprimer",
      width: 80,
      editable: false,
      sortable: false,
      renderCell: (params) => (
        <Tooltip>
          <IconButton
            onClick={() => {
              handleDelete(params.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const processRowUpdate = React.useCallback((user) => {
    const {
      id,
      firstname,
      lastname,
      username,
      role,
      email,
      address,
      phone,
      avatar,
    } = user;
    const updateUser = { ...user, isNew: false };
    setUsers(users.map((row) => (row.id === user.id ? updateUser : user)));
    axios
      .put(`http://localhost:5000/users/${id}`, {
        firstname,
        lastname,
        username,
        role,
        email,
        address,
        phone,
        avatar,
      })
      .then(() => {
        setLoadingUsers((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
    return updateUser;
  }, []);

  const handleProcessRowUpdateError = React.useCallback((error) => {
    console.error(error);
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Link href="/admin" underline="hover">
            Dashboard
          </Link>
          /
          <Link href="/admin/users" underline="hover">
            User
          </Link>
        </Box>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          startIcon={<AddIcon />}
        >
          New User
        </Button>
      </Stack>

      <DataGrid
        getRowId={(row) => row.id}
        rows={users}
        columns={columns}
        editMode="row"
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 25]}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        autoHeight
        disableRowSelectionOnClick
      />

      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "background.secondary",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajoutez un nouvel utilisateur
          </Typography>
          <UserForm
            closeModal={handleCloseModal}
            setLoadingUsers={setLoadingUsers}
          />
        </Box>
      </Modal>
    </Container>
  );
}
