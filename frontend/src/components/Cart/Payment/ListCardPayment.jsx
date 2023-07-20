import React from "react";
import { AccordionPanel, CloseButton } from "@chakra-ui/react";
import visa from "../../../assets/Cart/Payment/visa.png";

export default function ListCardPayment({
  localCard,
  handleValide,
  handleDeletedCard,
}) {
  return (
    <AccordionPanel className="flex flex-col item-center py-4">
      {localCard.map((card) => (
        <div
          key={card.id}
          className="flex md:grid md:grid-cols-3 items-center justify-center p-2 rounded-b"
        >
          <div className="flex flex-cols-1 items-center">
            <input
              value={card.number}
              onChange={(e) => handleValide(e)}
              type="radio"
              readOnly
            />
            <img className="hidden md:block w-10 mx-4" src={visa} alt="" />
          </div>
          <div className="flex items-center w-[40vw]">
            <p>{card.genre}</p>
            <p className="pl-4 hidden md:block">{card.lastname}</p>
            <p className="px-4">{card.firstname}</p>
            <p>{card.number}</p>
          </div>
          <div className="flex justify-end">
            <CloseButton
              onClick={() => {
                handleDeletedCard(card.id);
              }}
            />
          </div>
        </div>
      ))}
    </AccordionPanel>
  );
}
