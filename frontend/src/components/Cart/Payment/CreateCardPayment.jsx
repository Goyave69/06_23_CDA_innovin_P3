import React from "react";
import VisualCardVirtuel from "./VisualCardVirtuel";
import InputFormCard from "./InputFormCard";

export default function CreateCardPayment({
  dataCard,
  handleChange,
  handleSubmit,
  setCreatedCard,
  createdCard,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden mx-10 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="bg-white md:w-[45vw] rounded-2xl">
          <VisualCardVirtuel dataCard={dataCard} />
          <InputFormCard handleChange={handleChange} />
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="py-2 px-4 mx-2 mb-2 border rounded"
              type="button"
            >
              Valider
            </button>
            <button
              onClick={() => setCreatedCard(!createdCard)}
              className="py-2 px-4 mx-2 mb-2 border rounded"
              type="button"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 bg-black" />
    </>
  );
}
