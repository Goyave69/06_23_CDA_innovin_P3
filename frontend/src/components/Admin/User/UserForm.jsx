import { TextField, Box, Button } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";

const inputFields = [
  {
    name: "firstname",
    label: "Prénom",
    placeholder: "Prénom",
    sx: { margin: "10px", width: "46%" },
  },
  {
    name: "lastname",
    label: "Nom",
    placeholder: "Nom",
    sx: { margin: "10px", width: "46%" },
  },
  {
    name: "username",
    label: "Pseudo",
    placeholder: "Pseudo",
    sx: { margin: "10px", width: "46%" },
  },
  {
    name: "role",
    label: "Rôle",
    placeholder: "user",
    sx: { margin: "10px", width: "46%" },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    sx: { margin: "10px", width: "95%" },
  },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "Mot de passe",
    sx: { margin: "10px", width: "95%" },
  },
  {
    name: "address",
    label: "Adresse",
    placeholder: "Adresse",
    sx: { margin: "10px", width: "95%" },
  },
  {
    name: "phone",
    label: "Téléphone",
    placeholder: "Numéro de Téléphone",
    sx: { margin: "10px", width: "95%" },
  },
];

export default function UserForm({ closeModal, setLoading }) {
  const [dataForm, setDataForm] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    role: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    avatar: "/",
    cart_id: 1,
  });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    ApiHelper("users", "post", dataForm)
      .then(() => {
        setLoading((prev) => !prev);
        closeModal();
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {inputFields.map((field) => (
          <TextField
            onChange={handleChange}
            key={field.name}
            required
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            sx={field.sx}
          />
        ))}
      </Box>
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
  setLoading: PropTypes.func.isRequired,
};
