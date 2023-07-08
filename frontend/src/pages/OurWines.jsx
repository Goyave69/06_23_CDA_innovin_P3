import React, { useEffect, useState } from "react";
import ApiHelper from "../services/apiHelper";
import CardOurWines from "../components/OurWines/CardOurWines";
import SelectWine from "../components/OurWines/SelectWine";

export default function OurWines() {
  const [wines, setWines] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    ApiHelper("wines", "get").then((res) => {
      setWines(res.data);
    });
  }, []);

  return (
    <div className="mx-10">
      <h4 className="text-center py-4 font-bold text-red-500 text-3xl">
        Nos vins
      </h4>
      <SelectWine setType={setType} wines={wines} />
      {wines.length > 0 && (
        <div className="md:grid md:grid-cols-4 md:gap-10 ">
          {wines
            .filter((wine) => {
              return type === "" ? wine : wine.wine_type.includes(type);
            })
            .map((wine) => (
              <CardOurWines props={wine} />
            ))}
        </div>
      )}
    </div>
  );
}
