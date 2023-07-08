import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/Cart/arrow.png";

export default function RecapOrder({ total, showCartWines, setShowCartWines }) {
  return (
    <div className=" mt-20 mx-5 h-[300px] w-[25%] flex flex-col border px-5 py-10 rounded-lg shadow border-gray-300">
      <h2 className="text-2xl font-bold tracking-wide">Commande</h2>
      <br />
      <div className="flex justify-between">
        <p className="font-bold">Total :</p>
        <p className="font-bold">{total}€</p>
      </div>
      <button
        onClick={() => setShowCartWines(!showCartWines)}
        className="p-2 border w-full text-center bg-[#3182ce] hover:bg-[#1e5181] text-white mt-6 flex items-center border-black rounded-lg"
        type="button"
      >
        Paiement
        <img className="h-8 pl-4" src={arrow} alt="" />
      </button>
      <NavLink to="/wines" className="pt-10 mx-auto">
        <span className="font-bold text-[#3182ce] hover:text-[#3273af] hover:underline">
          continuer vos achats
        </span>
      </NavLink>
    </div>
  );
}
