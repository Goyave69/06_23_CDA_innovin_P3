import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import bgLogin from "../assets/Login/bgLogin.jpg";
import mail from "../assets/Login/mail.png";
import chrome from "../assets/Login/chrome.png";
import vector from "../assets/Login/Vector.png";

function Login() {
  const inputFields = [
    {
      id: "email",
      label: "Email",
      placeholder: "Email",
      icon: mail,
      variant: "standard",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "Password",
      icon: vector,
      variant: "standard",
      autoComplete: "current-password",
      type: "password",
    },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "90vh" }}>
      <Box
        sx={{
          background: `url(${bgLogin}) no-repeat center `,
          backgroundSize: "contain",
          width: "50%",
          height: "90vh",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "70vh",
          marginTop: "5%",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "center", py: "10px" }}
        >
          Heureux de te revoir !
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: "5%",
          }}
        >
          {inputFields.map((field) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
              key={field.id}
            >
              <img src={field.icon} alt="" />
              <TextField
                required
                variant={field.variant}
                autoComplete={field.autoComplete}
                type={field.type}
                id={field.id}
                label={field.label}
                placeholder={field.placeholder}
                sx={{ mx: "1vw", py: "1vh" }}
              />
            </Box>
          ))}
          <Button
            sx={{
              backgroundColor: "white",
              width: { xs: "80%", md: "50%" },
              display: "flex",
              justifyContent: "space-around",
            }}
            variant="outlined"
          >
            <Box
              sx={{
                background: `url(${chrome}) no-repeat center `,
                height: "20px",
                width: "20px",
              }}
            />
            Connecter vous avec Google !
          </Button>
          <Button
            sx={{
              backgroundColor: "red",
              width: { xs: "80%", md: "50%" },
              my: "2%",
            }}
            variant="contained"
          >
            Connexion
          </Button>
        </form>
        <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
          Toujours pas de compte ? <br />
          <NavLink to="/signUp">
            <span style={{ color: "red", textDecoration: "underline" }}>
              Inscris-toi !
            </span>
          </NavLink>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
