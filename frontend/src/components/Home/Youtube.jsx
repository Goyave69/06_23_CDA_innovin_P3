import { Typography } from "@mui/material";
import React from "react";
import YouTube from "react-youtube";

function Youtube() {
  const opts = {
    height: "390",
    width: "640",
  };
  return (
    <div>
      <hr
        style={{
          color: "#DEB95D",
          backgroundColor: "#DEB95D",
          height: 2,
          marginBottom: 10,
        }}
      />
      <Typography
        variant="h4"
        style={{ color: "#DEB95D", textAlign: "center", padding: 20 }}
      >
        Les Cépages du Vin
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <YouTube videoId="ZM9gUAlbAR0" opts={opts} />
      </div>
      <hr
        style={{
          color: "#DEB95D",
          backgroundColor: "#DEB95D",
          height: 2,
          marginTop: 40,
        }}
      />
    </div>
  );
}

export default Youtube;
