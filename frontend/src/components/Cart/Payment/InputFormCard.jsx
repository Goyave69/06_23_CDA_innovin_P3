import React from "react";

export default function InputFormCard({ handleChange }) {
  const inputFields = [
    {
      name: "firstname",
      type: "text",
      placeholder: "Prénom",
    },
    {
      name: "lastname",
      type: "text",
      placeholder: "Nom",
    },
    {
      name: "number",
      type: "number",
      placeholder: "Numéro de carte",
    },
    {
      name: "expire",
      type: "text",
      placeholder: "Date d'expiration",
    },
  ];
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
      {inputFields.map((inputField) => (
        <input
          key={inputField.name}
          className="p-2 my-1 rounded mx-1 border placeholder-gray-400"
          type={inputField.type}
          name={inputField.name}
          placeholder={inputField.placeholder}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
