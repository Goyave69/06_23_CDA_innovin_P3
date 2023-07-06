import React, { useEffect, useState } from "react";
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
      <h4 className=" text-center py-4 font-bold text-red-500 text-3xl">
        Notre équipe d'incroyables sommeliers
      </h4>
      <div className="flex justify-center flex-wrap">
        {wines.length > 0 && (
          <div className="grid grid-cols-3 gap-10">
            {wines.map((wine) => (
              <CardHome props={wine} imgDif showDescription={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OurWines;
