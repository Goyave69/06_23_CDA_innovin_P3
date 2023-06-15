import {
  Container,
  Stack,
  Typography,
  Button,
  Modal,
  Box,
} from "@mui/material";
import * as React from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import UserTable from "./UserTable";

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

  React.useEffect(() => {
    axios
      .post("http://localhost:5000/users")
      .then(() => {
        setLoadingUsers((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          User
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          startIcon={<AddIcon />}
        >
          New User
        </Button>
      </Stack>

      <UserTable users={users} />

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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}
