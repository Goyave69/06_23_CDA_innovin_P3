import React from "react";
import Delivery from "./Delivery";
import PaymentMethod from "./PaymentMethod";

export default function Payment({
  handleValide,
  user,
  handleCartOrder,
  checkedValidePaiment,
}) {
  return (
    <div className="md:w-2/3 w-full mr-10 pt-12 px-10 md:px-0 md:pl-12 flex flex-col">
      <h2 className="text-center text-2xl font-semibold tracking-wide py-4">
        Passer la commande (2 articles)
      </h2>
      <hr />
      <Delivery
        user={user}
        handleValide={handleValide}
        checkedValidePaiment={checkedValidePaiment}
      />
      <PaymentMethod
        handleValide={handleValide}
        checkedValidePaiment={checkedValidePaiment}
      />
      <button
        onClick={handleCartOrder}
        className="border py-2 px-3 mx-auto mt-3 rounded"
        type="button"
      >
        Valider le Paiement
      </button>
    </div>
  );
}
