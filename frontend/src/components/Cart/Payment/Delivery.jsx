import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Delivery() {
  return (
    <>
      <Accordion className="p-2 border" allowMultiple>
        <AccordionItem>
          <AccordionButton className="flex justify-between">
            <>
              <p className="font-semibold text-xl"> 1</p>
              <p className="font-semibold text-xl">Adresse de livraison</p>
            </>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel className="flex item-center py-4">
            <input type="radio" />
            <p className="pl-4">
              ryan beaujot 37 Rue du CoinCoin L Isle D Abeau, 38080
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
