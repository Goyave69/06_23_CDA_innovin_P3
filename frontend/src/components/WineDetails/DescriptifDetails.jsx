import React from "react";

function DescriptifDetails({ wineDetail }) {
  const keysWine = Object.keys(wineDetail);
  const valuesWine = Object.values(wineDetail);

  return (
    <div className="mx-[5vw]">
      <p className="text-red-500 font-bold pb-2">Informations sur le produit</p>
      <p className="pb-2">Descriptif technique</p>
      <table className="flex">
        <tr>
          {keysWine.slice(1, 7).map((keyWine) => (
            <div key={keyWine} className="w-[30vw] h-[5vh] bg-gray-300">
              <th className="pl-2" scope="col">
                {keyWine}
              </th>
              <hr />
            </div>
          ))}
        </tr>
        <tr>
          {valuesWine.slice(1, 7).map((valueWine) => (
            <div className="w-[40vw] md:w-[30vw] h-[5vh]" key={valueWine}>
              <th className="pl-2" scope="col">
                {valueWine}
              </th>
              <hr />
            </div>
          ))}
        </tr>
      </table>
      <br />
      <hr />
    </div>
  );
}

export default DescriptifDetails;
