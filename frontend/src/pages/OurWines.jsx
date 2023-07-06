import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ApiHelper from "../services/apiHelper";
import CardHome from "../components/CardHome";

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
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {wines.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            {wines.map((wine) => (
              <CardHome props={wine} showDescription={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OurWines;
