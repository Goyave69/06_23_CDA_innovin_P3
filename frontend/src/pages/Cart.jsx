import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { CloseButton } from "@chakra-ui/react";
import arrow from "../assets/Cart/arrow.png";
import ApiHelper from "../services/apiHelper";
import ModaleConfirme from "../components/Cart/ModaleConfirme";

const { VITE_BACKEND_URL } = import.meta.env;

export default function CartBis() {
  const [dataCart, setDataCart] = useState([]);
  const [reloadCart, setReloadCart] = useState(false);
  const [showModalConfirme, setShowModalConfirme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedWine, setSelectedWine] = useState(null);

  useEffect(() => {
    ApiHelper("carts", "get").then((res) => {
      setDataCart(res.data);
    });
  }, []);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    if (dataCart.length > 0) {
      dataCart[0].content.forEach((item) => {
        sum += item.price * item.quantity;
      });
    }
    setTotal(Math.round(sum * 100) / 100);
  }, [dataCart]);

  const handleDelete = (id) => {
    if (!selectedWine) return;
    axios.delete(`http://localhost:5000/cartwines/${id}`).then(() => {
      setReloadCart(!reloadCart);
      setShowModalConfirme(false);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    });
  };

  useEffect(() => {
    ApiHelper("carts", "get").then((res) => {
      setDataCart(res.data);
    });
  }, [reloadCart]);

  console.warn(dataCart);
  return (
    <div className="flex">
      <div className=" w-2/3 mr-10 pt-12 pl-12 flex-col">
        <h1 className=" tracking-wider pb-4 mb-4 text-2xl font-bold shadow pl-3">
          Panier
        </h1>
        <div className=" h-[70vh] overflow-auto">
          {dataCart[0]?.content[0].name === null ? (
            <p>Votre panier est vide.</p>
          ) : (
            dataCart[0]?.content.map((item) => (
              <div className="grid grid-cols-4 py-3 justify-between ">
                <div className="flex">
                  <img
                    className="h-36 w-fit rounded-lg "
                    src={`${VITE_BACKEND_URL}/uploads/${item.image}`}
                    alt=""
                  />
                  <div className="flex flex-col p-3 pl-3 ">
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
                <p className="p-5 ">{item.quantity}</p>
                <p className="p-5">
                  {Math.round(item.price * item.quantity * 100) / 100} €
                </p>
                <CloseButton
                  onClick={() => {
                    setSelectedWine(item);
                    setShowModalConfirme(true);
                  }}
                  className="h-5 pt-8"
                />
              </div>
            ))
          )}
          {showModalConfirme && (
            <ModaleConfirme
              selectedWine={selectedWine}
              setSelectedWine={setSelectedWine}
              setShowModalConfirme={setShowModalConfirme}
              handleDelete={handleDelete}
            />
          )}
          {showModal && (
            <div className="justify-center items-center flex overflow-x-hidden mx-10 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full px-14 bg-[#38a169] outline-none focus:outline-none">
                  <div className="flex items-center justify-between p-5 border-b h-[30vh]  border-solid text-white border-slate-200 rounded-t">
                    <h3 className="text-xl text-center font-semibold">
                      Suppréssion du produit éffectuée
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" mt-20 mx-5 h-[300px] w-[25%] flex flex-col border px-5 py-10 rounded-lg shadow border-gray-300">
        <h2 className="text-2xl font-bold tracking-wide">Commande</h2>
        <br />
        <div className="flex justify-between">
          <p>Sous-Total :</p>
          <p>{total}</p>
        </div>
        <br />
        <div className="flex justify-between">
          <p>Frais Livraison :</p>
          <p>3€</p>
        </div>
        <br />
        <div className="flex justify-between">
          <p className="font-bold">Total :</p>
          <p className="font-bold">{total + 3}€</p>
        </div>
        <button
          className="p-2 border w-full text-center bg-[#3182ce] hover:bg-[#1e5181] text-white mt-4 flex items-center border-black rounded-lg"
          type="button"
        >
          Paiement
          <img className="h-8 pl-4" src={arrow} alt="" />
        </button>
        <NavLink to="/wines" className="pt-14 mx-auto">
          <span className="font-bold text-[#3182ce] hover:text-[#3273af] hover:underline">
            continuer vos achats
          </span>
        </NavLink>
      </div>
    </div>
  );
}
