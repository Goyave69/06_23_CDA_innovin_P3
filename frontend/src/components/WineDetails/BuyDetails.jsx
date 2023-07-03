/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function BuyDetails({
  wineDetail,
  priceMultiple,
  setQuantitiesSelected,
  Quantity,
}) {
  return (
    <Box
      sx={{
        border: "1px solid black",
        mx: "10px",
        width: "20vw",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        px: "2%",
      }}
    >
      <Typography variant="h6">
        {!priceMultiple ? wineDetail.price : priceMultiple}€
      </Typography>
      <br />
      <Typography sx={{ color: "red", fontWeight: "bold" }} variant="h7">
        Habituellement expédié sous 2 à 3 jours
      </Typography>
      <br />
      <Typography variant="h7">Livraison gratuite</Typography>
      <br />
      <select
        onChange={(e) => setQuantitiesSelected(e.target.value)}
        name=""
        id=""
      >
        {Quantity.slice(1, 32).map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <br />
      <Button
        sx={{
          backgroundColor: "yellow",
          color: "black",
          fontWeight: "bold",
          borderRadius: "10px",
          hover: { backgroundColor: "#4342" },
        }}
      >
        Ajouter au panier
      </Button>
      <Button
        sx={{
          backgroundColor: "orange",
          color: "black",
          fontWeight: "bold",
          borderRadius: "10px",
          marginTop: "2%",
        }}
      >
        acheter maintenant
      </Button>
    </Box>
  );
}
