import React from "react";
import { CloseButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import data from "../components/Cart/_data";
import arrow from "../assets/Cart/arrow.png";

export default function CartBis() {
  return (
    <div className="flex">
      <div className=" w-2/3 mr-10 pt-12 pl-12 flex-col">
        <h1 className=" tracking-wider pb-4 text-2xl font-bold">
          Panier(3 articles)
        </h1>
        <div className="flex pt-3  justify-between">
          <div className="flex">
            <img
              className="h-32 w-32 rounded-lg"
              src={data[0].imageUrl}
              alt=""
            />
            <div className="flex flex-col pt-3 pl-3">
              <p>{data[0].name}</p>
              <p>{data[0].description}</p>
            </div>
          </div>
          <p className="pt-5">{data[0].quantity}</p>
          <p className="pt-5">{data[0].price}€</p>
          <CloseButton className="h-5 pt-8" />
        </div>
        <div className="flex pt-3  justify-between">
          <div className="flex">
            <img
              className="h-32 w-32 rounded-lg"
              src={data[1].imageUrl}
              alt=""
            />
            <div className="flex flex-col pt-3 pl-3">
              <p>{data[1].name}</p>
              <p>{data[1].description}</p>
            </div>
          </div>
          <p className="pt-5">{data[1].quantity}</p>
          <p className="pt-5">{data[1].price}€</p>
          <CloseButton className="h-5 pt-8" />
        </div>
        <div className="flex pt-3  justify-between">
          <div className="flex">
            <img
              className="h-32 w-32 rounded-lg"
              src={data[2].imageUrl}
              alt=""
            />
            <div className="flex flex-col pt-3 pl-3">
              <p>{data[2].name}</p>
              <p>{data[2].description}</p>
            </div>
          </div>
          <p className="pt-5">{data[2].quantity}</p>
          <p className="pt-5">{data[2].price}€</p>
          <CloseButton className="h-5 pt-8" />
        </div>
      </div>
      <div className=" mt-20 mx-5 h-[300px] w-[25%] flex flex-col border px-5 py-10 rounded-lg border-gray-300">
        <h2 className="text-2xl font-bold tracking-wide">Commande</h2>
        <br />
        <div className="flex justify-between">
          <p>Sous-Total :</p>
          <p>300€</p>
        </div>
        <br />
        <div className="flex justify-between">
          <p>Frais Livraison :</p>
          <p>3€</p>
        </div>
        <br />
        <div className="flex justify-between">
          <p className="font-bold">Total :</p>
          <p className="font-bold">303€</p>
        </div>
        <button
          className="p-2 border w-full text-center bg-[#3182ce] hover:bg-[#1e5181] text-white mt-4 flex items-center border-black rounded-lg"
          type="button"
        >
          Paiement
          <img className="h-8 pl-4" src={arrow} alt="" />
        </button>
        <NavLink className="pt-14 mx-auto">
          ou{" "}
          <span className="font-bold text-[#3182ce]">continuer vos achats</span>
        </NavLink>
      </div>
    </div>
  );
}
