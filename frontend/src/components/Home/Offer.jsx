import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CardHome from "../CardHome";
import products from "./OfferData";

function Offer() {
  return (
    <Box>
      <Typography
        sx={{
          color: "text.tertiary",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2rem" },
          textAlign: "center",
          padding: "2% 0 0 0 ",
        }}
      >
        UNE OFFRE SUR-MESURE
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: { xs: "1rem", md: "1.3rem" },
          textAlign: "center",
          padding: "1% 0",
        }}
      >
        L'accompagnement de votre choix
      </Typography>
      <Box
        sx={{
          display: { sx: "block", md: "flex" },
          justifyContent: { xs: "center", md: "space-around" },
        }}
      >
        {products.map((product) => (
          <CardHome props={product} showButton={false} />
        ))}
      </Box>
    </Box>
  );
}

export default Offer;
