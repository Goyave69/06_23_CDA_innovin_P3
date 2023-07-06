import React from "react";
import CardHome from "../CardHome";
import products from "./OfferData";

function Offer() {
  return (
    <div>
      <h2 className="flex justify-center uppercase font-bold text-2xl md:text-4xl text-center pt-8">
        une offre sur-mesure
      </h2>
      <h4 className="flex justify-center font-bold text-xl md:text-2xl text-center pt-2 pb-6">
        L'accompagnement de votre choix
      </h4>
      <div className="block md:flex justify-around">
        {products.map((product) => (
          <CardHome key={product.id} props={product} showButton={false} />
        ))}
      </div>
    </div>
  );
}

export default Offer;
