import * as React from "react";
import { Container, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactInformation() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "20%",
        margin: "0",
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center", margin: "25px 0" }}>
        Nos informations
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "300px",
        }}
      >
        <LocationOnIcon />
        <Typography sx={{ margin: "10px", width: "200px" }}>
          Inno'Vin
          <br />
          31 avenue des cuvages
          <br />
          69430 Beaujeu
        </Typography>
      </Box>
      <hr style={{ width: "50%", margin: "0 auto 10px auto" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "300px",
        }}
      >
        <PhoneIcon />
        <Typography sx={{ margin: "10px", width: "200px" }}>
          Appelez-nous :<br />
          +33 1 11 11 11 11
        </Typography>
      </Box>
      <hr style={{ width: "50%", margin: "0 auto 10px auto" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "300px",
        }}
      >
        <EmailIcon />
        <Typography sx={{ margin: "10px", width: "200px" }}>
          Envoyez-nous un e-mail :<br />
          contact@innovin.com
        </Typography>
      </Box>
    </Container>
  );
}
