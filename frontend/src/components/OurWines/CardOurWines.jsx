import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import favori from "../../assets/favori.png";
import cart from "../../assets/cart.png";
import oeil from "../../assets/oeil.png";

const { VITE_BACKEND_URL } = import.meta.env;

export default function CardOurWines({ props }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowOptions(!showOptions)}
      onMouseLeave={() => setShowOptions(!showOptions)}
      className="md:w-[20vw] pt-5 relative"
    >
      <div className="bg-cardHome bg-cover max-h-[50vh] flex flex-col">
        <img
          className="mx-auto h-[50vh] py-7"
          src={`${VITE_BACKEND_URL}/uploads/${props.image}`}
          alt=""
        />
        {showOptions && (
          <div className="relative bottom-12 mx-auto bg-gray-300 w-[90%] rounded flex justify-evenly text-red-500">
            <img
              title="Mettre en favoris"
              className="h-10 p-2 cursor-pointer "
              src={favori}
              alt=""
            />
            <img
              title="Ajouter au panier"
              className="h-10 p-2 cursor-pointer"
              src={cart}
              alt=""
            />
            <NavLink className="flex" to={`/wine/${props.id}`}>
              <img
                title="Voir en detail"
                className="h-10 p-2 cursor-pointer"
                src={oeil}
                alt="coucou"
              />
            </NavLink>
          </div>
        )}
        <div className="relative md:hidden bottom-12 mx-auto bg-gray-300 w-[90%] rounded flex justify-evenly text-red-500">
          <img
            title="Mettre en favoris"
            className="h-10 p-2 cursor-pointer "
            src={favori}
            alt=""
          />
          <img
            title="Ajouter au panier"
            className="h-10 p-2 cursor-pointer"
            src={cart}
            alt=""
          />
          <NavLink className="flex" to={`/wine/${props.id}`}>
            <img
              title="Voir en detail"
              className="h-10 p-2 cursor-pointer"
              src={oeil}
              alt="coucou"
            />
          </NavLink>
        </div>
      </div>

      <br />
      <div className="px-2">
        <p className="text-lg pb-2">{props.name}</p>
        <p className="text-xl">{props.price} €</p>
      </div>
    </div>
  );
}
