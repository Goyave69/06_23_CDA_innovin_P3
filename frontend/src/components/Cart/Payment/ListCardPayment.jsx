import React from "react";
import { AccordionPanel } from "@chakra-ui/react";
import visa from "../../../assets/Cart/Payment/visa.png";

export default function ListCardPayment({
  localCard,
  formatCardNumber,
  handleValide,
}) {
  return (
    <AccordionPanel className="flex flex-col item-center py-4">
      {localCard.map((card) => (
        <div className="flex md:grid md:grid-cols-3 items-center justify-center p-2 rounded-b">
          <div className="flex bg-red-500 items-center">
            <input
              value={formatCardNumber(card.number)}
              onChange={(e) => handleValide(e)}
              type="radio"
              readOnly
            />
            <img className="hidden md:block w-10 mx-4" src={visa} alt="" />
          </div>
          <div className="flex items-center">
            <p>{card.genre}</p>
            <p className="pl-4 hidden md:block">{card.lastname}</p>
            <p className="pl-4">{card.firstname}</p>
          </div>
          <p>{formatCardNumber(card.number)}</p>
        </div>
      ))}
    </AccordionPanel>
  );
}
