import React, { useEffect, useState } from "react";
import ApiHelper from "../services/apiHelper";
import WineCard from "../components/OurWines/WineCard";

function OurWines() {
  const [wines, setWines] = useState([]);
  useEffect(() => {
    ApiHelper("wines", "get").then((res) => {
      setWines(res.data);
    });
  }, []);

  return (
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
            <WineCard wine={wine} />
          ))}
        </div>
      )}
    </div>
  );
}

export default OurWines;
