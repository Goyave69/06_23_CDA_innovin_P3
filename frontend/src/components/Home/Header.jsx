import React from "react";
import { Box, Typography } from "@mui/material";
import bgHome from "../../assets/bgHome.jpg";

function Header() {
  return (
    <Box
      sx={{
        background: `url(${bgHome}) no-repeat center center fixed`,
        backgroundSize: "cover",
        height: { xs: "50vh", md: "100vh" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "text.secondary",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "1.5rem" },
          textAlign: "center",
          padding: { xs: "30% 5% 5% 10%", md: "20% 5% 5% 10%" },
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
