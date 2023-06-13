import React from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Box, Button, TextField, Typography } from "@mui/material";
import bgLogin from "../assets/Login/bgLogin.jpg";
import mail from "../assets/Login/mail.png";
import userIcon from "../assets/Login/user.png";
import vector from "../assets/Login/Vector.png";
import adresse from "../assets/Login/adresse.png";
import phone from "../assets/Login/phone.png";

function SignUp() {
  const inputFields = [
    {
      name: "firstname",
      label: "Prénom",
      placeholder: "Prénom",
      icon: userIcon,
    },
    { name: "lastname", label: "Nom", placeholder: "Nom", icon: userIcon },
    {
      name: "username",
      label: "Pseudo",
      placeholder: "Pseudo",
      icon: userIcon,
    },
    { name: "email", label: "Email", placeholder: "Email", icon: mail },
    {
      name: "password",
      label: "Mot de passe",
      placeholder: "Mot de passe",
      icon: vector,
    },
    {
      name: "address",
      label: "Adresse",
      placeholder: "Adresse",
      icon: adresse,
    },
    {
      name: "phone",
      label: "Numéro de Téléphone",
      placeholder: "Numéro de Téléphone",
      icon: phone,
    },
  ];

  const [dataForm, setDataForm] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    role: "user",
    email: "",
    password: "",
    address: "",
    phone: "",
    avatar: "ijdiozejdiozejdoz",
    cart_id: 2,
  });

  const SubmitSignUp = () => {
    axios
      .post("http://localhost:5000/users", dataForm)
      .then((response, error) => {
        if (response.status === 201) {
          console.warn("created");
          toast.success(
            `Bienvenue ${dataForm.firstname}, votre compte a bien été créé !`
          );
        } else {
          console.warn("erreur", error);
        }
      });
  };

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
                key={field.name}
              >
                <img src={field.icon} alt="" />
                <TextField
                  onChange={handleChange}
                  required
                  name={field.name}
                  id={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  sx={{ margin: "10px" }}
                />
              </Box>
            ))}
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Button
                onClick={SubmitSignUp}
                sx={{ backgroundColor: "red", width: "35%" }}
                variant="contained"
              >
                S'inscrire
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
