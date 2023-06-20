import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ApiHelper from "../services/apiHelper";
import CardHome from "../components/Home/CardHome";

function OurWines() {
  const [wines, setWines] = useState([]);
  useEffect(() => {
    ApiHelper("wines", "get").then((res) => {
      setWines(res.data);
    });
  }, []);

  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          color: "text.tertiary",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2rem" },
          textAlign: "center",
          padding: "2% 0 2% 0 ",
        }}
      >
        Notre équipe d'incroyables sommeliers
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {wines.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoRows: "600px",
              gap: 30,
            }}
          >
            {wines.map((wine) => (
              <CardHome props={wine} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OurWines;
