import React, { useEffect, useState } from "react";
import ApiHelper from "../services/apiHelper";
import CardOurWines from "../components/OurWines/CardOurWines";

export default function OurWines() {
  const [wines, setWines] = useState([]);
  useEffect(() => {
    ApiHelper("wines", "get").then((res) => {
      setWines(res.data);
    });
  }, []);

  const [type, setType] = useState("");

  return (
    <div className="mx-10">
      <h4 className="text-center py-4 font-bold text-red-500 text-3xl">
        Nos vins
      </h4>
      <div className="my-1 w-full">
        <select
          onChange={(e) => setType(e.target.value)}
          className="md:px-2 border text-gray-500 rounded-sm py-3 px-4 shadow-sm"
        >
          <option value="" className=" sm:text-sm md:text-lg">
            Type de vin
          </option>
          <option value="Blanc" className=" sm:text-sm md:text-lg">
            Blanc
          </option>
          <option value="Rouge" className=" sm:text-sm md:text-lg">
            Rouge
          </option>
          <option value="Rosé" className=" sm:text-sm md:text-lg">
            Rosé
          </option>
          <option value="Champagne" className=" sm:text-sm md:text-lg">
            Champagne
          </option>
        </select>
      </div>
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
