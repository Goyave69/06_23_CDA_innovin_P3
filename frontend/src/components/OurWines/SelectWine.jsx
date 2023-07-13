import React from "react";

export default function SelectWine({ setType, wines }) {
  return (
    <div className="my-1 w-full">
      <select
        onChange={(e) => setType(e.target.value)}
        className="md:px-2 border text-gray-500 rounded-sm py-3 px-4 shadow-sm"
      >
        <option value="" className=" sm:text-sm md:text-lg">
          Type de vin
        </option>
        {wines.map((filterWine) => (
          <option
            key={filterWine.id}
            value={filterWine.wine_type}
            className=" sm:text-sm md:text-lg"
          >
            {filterWine.wine_type}
          </option>
        ))}
      </select>
    </div>
  );
}
