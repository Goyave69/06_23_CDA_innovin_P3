import React from "react";
import { CloseButton } from "@chakra-ui/react";
import ModaleConfirme from "./ModaleConfirme";

const { VITE_BACKEND_URL } = import.meta.env;

export default function CartWines({
  dataCart,
  setSelectedWine,
  setShowModalConfirme,
  showModalConfirme,
  selectedWine,
  handleDelete,
}) {
  return (
    <div className="w-2/3 mr-10 pt-12 pl-12 flex-col">
      <h1 className=" tracking-wider w-[80vw] md:w-auto pb-4 mb-4 text-2xl font-bold shadow pl-3">
        Panier
      </h1>
      <div className=" md:h-[70vh]  md:overflow-auto">
        {dataCart[0]?.content[0].name === null ? (
          <p>Votre panier est vide.</p>
        ) : (
          dataCart[0]?.content.map((item) => (
            <div
              key={item}
              className="flex w-[80vw] shadow-sm md:w-auto md:grid md:grid-cols-5 items-center py-3 justify-between "
            >
              <img
                className="h-36 w-fit rounded-lg "
                src={`${VITE_BACKEND_URL}/uploads/${item.image}`}
                alt=""
              />

              <div className="flex flex-col p-3 pl-3 ">
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
              <p className="p-5 ">{item.quantity}</p>
              <p className="p-5">
                {Math.round(item.price * item.quantity * 100) / 100} €
              </p>
              <CloseButton
                onClick={() => {
                  setSelectedWine(item);
                  setShowModalConfirme(true);
                }}
                className="h-5 ml-auto"
              />
            </div>
          ))
        )}
        {showModalConfirme && (
          <ModaleConfirme
            selectedWine={selectedWine}
            setSelectedWine={setSelectedWine}
            setShowModalConfirme={setShowModalConfirme}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
