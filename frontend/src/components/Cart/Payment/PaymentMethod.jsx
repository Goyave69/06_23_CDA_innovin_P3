/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
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
  const [dataCard, setDataCard] = useState({
    firstname: "",
    lastname: "",
    number: "",
    expire: "",
    genre: "",
  });

  const [localCard, setLocalCard] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      if (value.length <= 16) {
        setDataCard({ ...dataCard, [name]: value });
      }
    } else {
      setDataCard({ ...dataCard, [name]: value });
    }
  };

  const [createdCard, setCreatedCard] = useState(false);

  function formatCardNumber(cardNumber) {
    const array = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
      array.push(cardNumber.substr(i, 4));
    }
    return array.join(" ");
  }

  const handleSubmit = () => {
    const updatedLocalCard = [...localCard, dataCard];
    setLocalCard(updatedLocalCard);
    localStorage.setItem("localCard", JSON.stringify(updatedLocalCard));
    setCreatedCard(!createdCard);
  };

  useEffect(() => {
    const storedLocalCard = localStorage.getItem("localCard");
    if (storedLocalCard) {
      setLocalCard(JSON.parse(storedLocalCard));
    }
  }, []);

  const handleProps = () => {
    return {
      dataCard: dataCard,
      handleChange: handleChange,
      handleSubmit: handleSubmit,
      formatCardNumber: formatCardNumber,
      localCard: localCard,
      setCreatedCard: setCreatedCard,
      createdCard: createdCard,
      handleValide: handleValide,
    };
  };

  return (
    <>
      <Accordion className="p-2 border" allowMultiple>
        <AccordionItem>
          <AccordionButton className="flex relative justify-between">
            <>
              <p className="font-semibold text-xl"> 2</p>
              <p className="font-semibold text-xl">
                Sélectionnez un mode de paiement
              </p>
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
          {localCard && <ListCardPayment {...handleProps()} />}
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
      {createdCard && <CreateCardPayment {...handleProps()} />}
    </>
  );
}
