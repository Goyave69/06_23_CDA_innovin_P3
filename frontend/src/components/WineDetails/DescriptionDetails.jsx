/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import warning from "../../assets/warning.png";
import star from "../../assets/star.png";

export default function DescriptionDetails({ wineDetail }) {
  return (
    <Box sx={{ width: "40vw" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h5">{wineDetail.name}</Typography>
        {wineDetail.best_seller && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img style={{ height: "30px" }} src={star} alt="" />
            <Typography>Meilleure vente</Typography>
          </Box>
        )}
      </Box>
      <hr />
      <br />
      <Typography variant="h6" style={{ textDecoration: "underline" }}>
        À propos de cet article
      </Typography>
      <br />
      <Typography variant="h7">{wineDetail.description}</Typography>
      <br />
      <br />
      <Typography>
        <b>Marque</b> : Petrus
      </Typography>
      <br />
      <Typography>
        <b>Age</b> : {wineDetail.year}
      </Typography>
      <br />
      <hr />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#CBAF96",
          padding: "2%",
          borderRadius: "10px",
          marginTop: "6%",
        }}
      >
        <img src={warning} alt="" />
        <Typography>
          Interdiction de vente de boissons alcooliques aux mineurs de moins de
          18 ans. L’abus d’alcool est dangereux pour la santé. A consommer avec
          modération.
        </Typography>
      </Box>
    </Box>
  );
}
