import React from "react";
import VisualCardVirtuel from "./VisualCardVirtuel";
import InputFormCard from "./InputFormCard";

export default function CreateCardPayment({
  dataCard,
  formatCardNumber,
  handleChange,
  handleSubmit,
  setCreatedCard,
  createdCard,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden mx-10 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="bg-white md:w-[45vw] rounded-t-2xl">
          <VisualCardVirtuel
            dataCard={dataCard}
            formatCardNumber={formatCardNumber}
          />
          <InputFormCard handleChange={handleChange} />
          <div className="flex">
            <button
              onClick={handleSubmit}
              className="mx-auto py-2 px-4 mb-2 border rounded"
              type="button"
            >
              Valider
            </button>
            <button
              onClick={() => setCreatedCard(!createdCard)}
              className="mx-auto py-2 px-4 mb-2 border rounded"
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
