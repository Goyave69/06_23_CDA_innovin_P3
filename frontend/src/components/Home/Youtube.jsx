import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import YouTube from "react-youtube";

function Youtube() {
  const opts = {
    height: "390",
    width: "640",
  };
  return (
    <Box>
      <Divider
        sx={{
          color: "text.tertiary",
          backgroundColor: "background.secondary",
          height: 2,
        }}
      />
      <Typography
        variant="h4"
        sx={{ color: "text.tertiary", textAlign: "center", padding: 10 }}
      >
        Les Cépages du Vin
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <YouTube videoId="ZM9gUAlbAR0" opts={opts} />
      </div>
      <Divider
        sx={{
          color: "text.tertiary",
          backgroundColor: "background.secondary",
          height: 2,
          marginTop: 15,
        }}
      />
    </Box>
  );
}

export default Youtube;
