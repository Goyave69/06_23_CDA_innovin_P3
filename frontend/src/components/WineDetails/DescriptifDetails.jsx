/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function DescriptifDetails({ wineDetail }) {
  const keysWine = Object.keys(wineDetail);
  const valuesWine = Object.values(wineDetail);

  return (
    <Box sx={{ mx: "5vw" }}>
      <Typography sx={{ color: "red", fontWeight: "bold" }} variant="h7">
        Informations sur le produit
      </Typography>
      <br />
      <br />
      <Typography variant="h6">Descriptif technique</Typography>
      <table style={{ display: "flex" }}>
        <tr>
          {keysWine.slice(1, 7).map((keyWine) => (
            <Box
              sx={{
                backgroundColor: "gray",
                width: "30vw",
                height: "5vh",
              }}
            >
              <th scope="col">{keyWine}</th>
              <hr />
            </Box>
          ))}
        </tr>
        <tr>
          {valuesWine.slice(1, 7).map((valueWine) => (
            <Box
              sx={{
                width: "30vw",
                overflowX: "auto",
                height: "5vh",
              }}
            >
              <th style={{ overflowX: "auto" }} scope="col">
                {valueWine}
              </th>
              <hr />
            </Box>
          ))}
        </tr>
      </table>
      <br />
      <hr />
    </Box>
  );
}

export default DescriptifDetails;
