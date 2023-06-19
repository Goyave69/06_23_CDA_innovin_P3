import {
  Container,
  Stack,
  Typography,
  Button,
  Modal,
  Box,
  Link,
} from "@mui/material";
import * as React from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import UserTable from "./UserTable";
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

      <UserTable users={users} setLoadingUsers={setLoadingUsers} />

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
