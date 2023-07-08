import React from "react";
import Delivery from "./Delivery";
import PaymentMethod from "./PaymentMethod";

export default function Payment() {
  return (
    <div className="w-2/3 mr-10 pt-12 pl-12 flex-col">
      <h2 className="text-center text-2xl font-semibold tracking-wide py-4">
        Passer la commande (2 articles){" "}
      </h2>
      <hr />
      <Delivery />
      <PaymentMethod />
    </div>
  );
}
