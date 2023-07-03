/* eslint-disable react/prop-types */
import { Box } from "@mui/system";
import React from "react";

export default function ImgDetails({ wineDetail }) {
  return (
    <Box
      sx={{
        height: "100%",
        alignItems: "center",
        display: "flex",
      }}
    >
      <img
        style={{
          height: "70vh",
          padding: "2%",
          borderRadius: "10px",
          margin: "0 10vw 0 10vw",
        }}
        src={wineDetail.image}
        alt=""
      />
    </Box>
  );
}
