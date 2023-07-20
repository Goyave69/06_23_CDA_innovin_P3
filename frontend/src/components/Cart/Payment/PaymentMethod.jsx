/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import CreateCardPayment from "./CreateCardPayment";
import ListCardPayment from "./ListCardPayment";
import iconSuccess from "../../../assets/Cart/Payment/iconSuccess.png";

export default function PaymentMethod({ checkedValidePaiment, handleValide }) {
  const [localCard, setLocalCard] = useState([]);
  useEffect(() => {
    const storedLocalCard = localStorage.getItem("localCard");
    if (storedLocalCard) {
      setLocalCard(JSON.parse(storedLocalCard));
    }
  }, []);

  const handleDeletedCard = (id) => {
    const updatedLocalCard = localCard.filter((card) => card.id !== id);
    setLocalCard(updatedLocalCard);
    localStorage.setItem("localCard", JSON.stringify(updatedLocalCard));
  };

  const [dataCard, setDataCard] = useState({
    firstname: "",
    lastname: "",
    number: "",
    expire: "",
    genre: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 16) {
        setDataCard({ ...dataCard, [name]: numericValue });
      }
    } else {
      setDataCard({ ...dataCard, [name]: value });
    }
  };

  const [createdCard, setCreatedCard] = useState(false);

  const handleSubmit = () => {
    const newCard = {
      ...dataCard,
      id: uuidv4(),
    };
    const updatedLocalCard = [...localCard, newCard];
    setLocalCard(updatedLocalCard);
    localStorage.setItem("localCard", JSON.stringify(updatedLocalCard));
    setCreatedCard(!createdCard);
  };

  return (
    <>
      <Accordion className="p-2 border" allowMultiple>
        <AccordionItem>
          <AccordionButton className="flex relative justify-between">
            <>
              <p className="font-semibold text-xl"> 2</p>
              <p className="font-semibold text-xl">Mode de paiement</p>
              {checkedValidePaiment.paiment && (
                <img
                  className="h-8 absolute right-10"
                  src={iconSuccess}
                  alt="icon Success"
                  title="Moyen de Paiment validée"
                />
              )}
            </>
            <AccordionIcon />
          </AccordionButton>
          {localCard && (
            <ListCardPayment
              localCard={localCard}
              handleValide={handleValide}
              handleDeletedCard={handleDeletedCard}
            />
          )}
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
        <CreateCardPayment
          dataCard={dataCard}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setCreatedCard={setCreatedCard}
          createdCard={createdCard}
        />
      )}
    </>
  );
}
