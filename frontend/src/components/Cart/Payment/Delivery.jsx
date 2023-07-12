import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import iconSuccess from "../../../assets/Cart/Payment/iconSuccess.png";

export default function Delivery({ handleValide, user, checkedValidePaiment }) {
  return (
    <>
      <Accordion className="p-2 border" allowMultiple>
        <AccordionItem>
          <AccordionButton className="flex relative justify-between">
            <>
              <p className="font-semibold text-xl"> 1</p>
              <p className="font-semibold text-xl">Adresse de livraison</p>
              {checkedValidePaiment.delivery && (
                <img
                  className="h-8 absolute right-10"
                  src={iconSuccess}
                  alt="icon Success"
                  title="Adresse de livraison validée"
                />
              )}
            </>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel className="flex item-center py-4">
            <input
              value={user.address}
              onChange={(e) => handleValide(e)}
              type="radio"
            />
            <p className="pl-4">{user.address}</p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
