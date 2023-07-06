/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import iconMenu from "../assets/menu.png";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const Links = [
    { name: "ACCUEIL", link: "/" },
    { name: "NOS VINS", link: "wines" },
    { name: "CONTACT", link: "contact" },
  ];
  const [open, setOpen] = useState(false);

  const handleDeconnected = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="shadow-md w-full h-[10vh]">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          INNO'VIN
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img className="h-8" src={iconMenu} alt="" />
        </button>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-30 left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className="text-gray-800 hover:text-gray-600 duration-300"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {!user ? (
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to="connect"
                className="text-gray-800 hover:text-gray-600 duration-300"
              >
                CONNEXION
              </NavLink>
            </li>
          ) : (
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <button
                onClick={handleDeconnected}
                type="button"
                className="text-gray-800 hover:text-gray-600 duration-300"
              >
                DECONNECTION
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
