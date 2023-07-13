/* eslint-disable react/prop-types */
import React from "react";

export default function BuyDetails({
  wineDetail,
  priceMultiple,
  setQuantitiesSelected,
  quantity,
  handleCart,
}) {
  return (
    <div className="flex flex-col mx-3 md:w-[20vw] pb-4 border border-2-black px-3 shadow-md">
      <p>{!priceMultiple ? wineDetail.price : priceMultiple}€</p>
      <br />
      <p className="text-red-500 text-sm font-bold">
        Habituellement expédié sous 2 à 3 jours
      </p>
      <br />
      <p>Livraison gratuite</p>
      <br />
      <select
        className="border border-2-black rounded-md"
        onChange={(e) => setQuantitiesSelected(e.target.value)}
        name=""
        id=""
      >
        {quantity.slice(1, 32).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br />
      <button
        onClick={handleCart}
        className=" bg-yellow-300 hover:bg-yellow-400 py-1 mb-2 rounded-lg font-bold"
        type="button"
      >
        Ajouter au panier
      </button>
      <button
        type="button"
        className="bg-orange-300 hover:bg-orange-400 py-1 rounded-lg font-bold"
      >
        acheter maintenant
      </button>
    </div>
  );
}
