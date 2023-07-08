/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import bp from "../../../assets/Cart/Payment/bp.png";
import sanscontact from "../../../assets/Cart/Payment/sanscontact.png";
import visa from "../../../assets/Cart/Payment/visa.png";

export default function PaymentMethod() {
  const [dataCard, setDataCard] = useState({
    name: "",
    number: "",
    genre: "",
  });
  const handleChange = (e) => {
    setDataCard({ ...dataCard, [e.target.name]: e.target.value });
  };
  const [createdCard, setCreatedCard] = useState(false);

  return (
    <>
      <Accordion className="p-2 border" allowMultiple>
        <AccordionItem>
          <AccordionButton className="flex justify-between">
            <>
              <p className="font-semibold text-xl"> 2</p>
              <p className="font-semibold text-xl">
                Sélectionnez un mode de paiement
              </p>
            </>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel className="flex flex-col item-center py-4">
            <button
              className="border w-fit px-3 py-2 rounded mx-auto"
              onClick={() => setCreatedCard(!createdCard)}
              type="button"
            >
              enregistrer une carte de paiement{" "}
            </button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {createdCard && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden mx-10 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="bg-white w-[35vw] rounded-t-2xl">
              <div className="bg-[#34495e] rounded-2xl w-full pt-[60%] overflow-hidden relative">
                <img
                  className="absolute top-[35%] left-[5%] h-[23%]"
                  src={bp}
                  alt=""
                />
                <img
                  className="absolute top-[40%] left-[25%] h-[15%]"
                  src={sanscontact}
                  alt=""
                />
                <img
                  className="absolute bottom-5 right-5 h-[30%]"
                  src={visa}
                  alt=""
                />
                <p className="absolute top-[55%] left-[5%] text-xl text-white">
                  {dataCard.number}
                </p>
                <p className="absolute top-[68%] left-[5%] text-white">
                  {dataCard.genre} {dataCard.name}
                </p>
                <p className="absolute top-[78%] left-[5%] text-white">
                  Expire 05/23
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-b">
                <div className="flex justify-center w-full">
                  <div className="mr-4 mb-2">
                    <input
                      type="radio"
                      onChange={handleChange}
                      name="genre"
                      value="Mr"
                    />
                    <label htmlFor="">Mr</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      onChange={handleChange}
                      name="genre"
                      value="Mme"
                    />
                    <label htmlFor="">Mme</label>
                  </div>
                </div>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Nom et Prénom"
                  className="p-2 mx-1 border placeholder-gray-400"
                />
                <input
                  onChange={handleChange}
                  name="number"
                  type="text"
                  placeholder="Numéro de carte"
                  className="p-2 border placeholder-gray-400"
                />
              </div>
              <div className="flex">
                <button
                  onClick={() => setCreatedCard(!createdCard)}
                  className="mx-auto py-2 px-4 mb-2 border rounded"
                  type="button"
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      )}
    </>
  );
}
