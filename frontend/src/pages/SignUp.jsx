import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import bgLogin from "../assets/Login/bgLogin.jpg";
import mail from "../assets/Login/mail.png";
import user from "../assets/Login/user.png";
import vector from "../assets/Login/Vector.png";
import adresse from "../assets/Login/adresse.png";
import phone from "../assets/Login/phone.png";

function SignUp() {
  const inputFields = [
    { name: "name", label: "Nom", placeholder: "Nom", icon: user },
    { name: "firstName", label: "Prénom", placeholder: "Prénom", icon: user },
    { name: "username", label: "Pseudo", placeholder: "Pseudo", icon: user },
    { name: "email", label: "Email", placeholder: "Email", icon: mail },
    {
      name: "password",
      label: "Mot de passe",
      placeholder: "Mot de passe",
      icon: vector,
    },
    {
      name: "confirmPassword",
      label: "Confirmer le mot de passe",
      placeholder: "Confirmer le mot de passe",
      icon: vector,
    },
    {
      name: "address",
      label: "Adresse",
      placeholder: "Adresse",
      icon: adresse,
    },
    {
      name: "phoneNumber",
      label: "Numéro de Téléphone",
      placeholder: "Numéro de Téléphone",
      icon: phone,
    },
  ];

  const [dataForm, setDataForm] = React.useState({
    name: "",
    firstName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          background: `url(${bgLogin}) no-repeat center `,
          backgroundSize: "contain",
          width: "50%",
          height: "89vh",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box>
        <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "center", py: "10px", px: "10vw" }}
        >
          Bienvenue dans l'équipe !
        </Typography>
        <Box sx={{ marginTop: "5%" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100vw", md: "50vw" },
            }}
          >
            {inputFields.map((field) => (
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                key={field.id}
              >
                <img src={field.icon} alt="" />
                <TextField
                  onChange={handleChange}
                  required
                  id={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  sx={{ margin: "10px" }}
                />
              </Box>
            ))}
            <Button
              sx={{ backgroundColor: "red", width: "35%" }}
              variant="contained"
            >
              S'inscrire
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
