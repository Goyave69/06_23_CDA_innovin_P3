import { TextField, Box, Button } from "@mui/material";
import * as React from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function UserForm({ closeModal, setLoadingUsers }) {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [role, setRole] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const user = {
    firstname,
    lastname,
    username,
    role,
    email,
    password,
    address,
    phone,
    avatar: "/",
    cart_id: 1,
  };

  const resetValues = () => {
    setFirstname("");
    setLastname("");
    setUsername("");
    setRole("");
    setEmail("");
    setPassword("");
    setAddress("");
    setPhone("");
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:5000/users", user)
      .then(() => {
        setLoadingUsers((prev) => !prev);
        closeModal();
        resetValues();
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex" }}>
        <TextField
          required
          id="outlined"
          label="Prénom"
          placeholder="jhon"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          sx={{ margin: "10px", width: "50%" }}
        />
        <TextField
          required
          id="outlined"
          label="Nom"
          placeholder="Doe"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          sx={{ margin: "10px", width: "50%" }}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <TextField
          required
          id="outlined"
          label="Pseudo"
          placeholder="altair"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ margin: "10px", width: "50%" }}
        />
        <TextField
          required
          id="outlined"
          label="Role"
          placeholder="user"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          sx={{ margin: "10px", width: "50%" }}
        />
      </Box>
      <TextField
        required
        id="outlined"
        label="Email"
        placeholder="johoe@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ margin: "10px", width: "95%" }}
      />
      <TextField
        required
        id="outlined"
        label="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ margin: "10px", width: "95%" }}
      />
      <TextField
        required
        id="outlined"
        label="Adresse"
        placeholder="123 Main St"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        sx={{ margin: "10px", width: "95%" }}
      />
      <TextField
        required
        id="outlined"
        label="Téléphone"
        placeholder="1234567890"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        sx={{ margin: "10px", width: "95%" }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Button onClick={closeModal}>Retour</Button>
        <Button onClick={onSubmit}>Ajouter</Button>
      </Box>
    </Box>
  );
}

UserForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setLoadingUsers: PropTypes.func.isRequired,
};
