import React from "react";
import { Box, Typography } from "@mui/material";
import bgHome from "../../assets/bg-home.jpg";

function Header() {
  return (
    <Box
      sx={{
        background: `url(${bgHome}) no-repeat center center fixed`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "text.secondary",
          fontWeight: "bold",
          fontSize: { xs: "1.3rem", md: "1.5rem" },
          textAlign: "center",
          padding: "20% 5% 5% 10% ",
        }}
      >
        Découvrez l'art de la dégustation du vin à travers notre site, où
        passion et expertise se rencontrent pour vous guider dans l'univers
        enivrant des saveurs et des arômes.
      </Typography>
    </Box>
  );
}

export default Header;
