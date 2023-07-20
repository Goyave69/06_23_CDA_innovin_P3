import React from "react";
import inputFields from "./DataPayment";

export default function InputFormCard({ handleChange }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-b">
      <div className="flex justify-center">
        <input type="radio" onChange={handleChange} name="genre" value="Mr" />
        <label className="pr-4" htmlFor="Mr">
          Mr
        </label>
        <input type="radio" onChange={handleChange} name="genre" value="Mme" />
        <label htmlFor="Mme">Mme</label>
      </div>
      <div className="flex flex-wrap justify-center">
        {inputFields.map((inputField) => (
          <input
            key={inputField.name}
            className="p-2 my-1 rounded border mx-2 placeholder-gray-400"
            type={inputField.type}
            name={inputField.name}
            placeholder={inputField.placeholder}
            onChange={handleChange}
            maxLength={inputField.maxLength}
          />
        ))}
      </div>
    </div>
  );
}
