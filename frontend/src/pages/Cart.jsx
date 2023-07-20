/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import ApiHelper from "../services/apiHelper";
import CartWines from "../components/Cart/CartWines";
import RecapOrder from "../components/Cart/RecapOrder";
import Payment from "../components/Cart/Payment/Payment";

const { VITE_BACKEND_URL } = import.meta.env;

export default function Cart() {
  const [dataCart, setDataCart] = useState([]);
  const [reloadCart, setReloadCart] = useState(false);
  const [showModalConfirme, setShowModalConfirme] = useState(false);
  const [showCartWines, setShowCartWines] = useState(true);
  const [selectedWine, setSelectedWine] = useState(null);
  const [valueDelivery, setValueDelivery] = useState(null);
  const [total, setTotal] = useState(0);
  const [_, setValuePaiment] = useState(null);
  const [user, setUser] = useState({});
  const [checkedValidePaiment, setCheckedValidePaiment] = useState({
    delivery: false,
    paiment: false,
  });

  const toast = useToast();

  // rempli les states d'adresse et de paiment
  // change le bool pour faire apparaitre l'icon success
  const handleValide = (e) => {
    if (!checkedValidePaiment.delivery && e.target.value === user.address) {
      setValueDelivery(e.target.value);
      setCheckedValidePaiment({ ...checkedValidePaiment, delivery: true });
    } else if (!checkedValidePaiment.paiment) {
      setValuePaiment(e.target.value);
      setCheckedValidePaiment({ ...checkedValidePaiment, paiment: true });
    }
  };

  const [dataOrder, setDataOrder] = useState([]);
  // récupere les carts
  useEffect(() => {
    ApiHelper("carts", "get").then((res) => {
      setDataCart(res.data);
    });
  }, [reloadCart]);

  useEffect(() => {
    ApiHelper("orders", "get").then((res) => {
      setDataOrder(res.data);
    });
  }, [reloadCart]);

  // calcul la somme total du panier
  useEffect(() => {
    let sum = 0;
    if (dataCart.length > 0) {
      dataCart[0].content.forEach((item) => {
        sum += item.price * item.quantity;
      });
    }
    setTotal(sum.toFixed(2));
  }, [dataCart]);

  const handleDelete = (id) => {
    if (!selectedWine) return;
    axios.delete(`${VITE_BACKEND_URL}/cartwines/${id}`).then(() => {
      setReloadCart(!reloadCart);
      setShowModalConfirme(false);
    });
  };

  useEffect(() => {
    setUser(JSON.parse(Cookies.get("user").slice(2)));
  }, []);

  // vérifie si l'utilisateur a bien mis l'adresse et le moyen de paiment avant de valider
  // Modifie is_order en true et renvoi un nouveau panier vide
  const handleCartOrder = () => {
    if (
      checkedValidePaiment.delivery === false ||
      checkedValidePaiment.paiment === false
    ) {
      toast({
        title:
          "Veuillez valider l'adresse de livraison et/ou le mode de paiement",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      axios.put(`${VITE_BACKEND_URL}/carts/${dataCart[0].id}`, {
        is_order: true,
      });
      axios.post(`${VITE_BACKEND_URL}/carts`, {
        user_id: user.id,
        cart_id: dataCart[0].id,
        is_order: false,
      });
      window.location.reload();
    }
  };
  return (
    <div className="flex flex-col md:flex-row">
      {showCartWines ? (
        <CartWines
          dataCart={dataCart}
          setSelectedWine={setSelectedWine}
          setShowModalConfirme={setShowModalConfirme}
          showModalConfirme={showModalConfirme}
          selectedWine={selectedWine}
          handleDelete={handleDelete}
        />
      ) : (
        <Payment
          handleCartOrder={handleCartOrder}
          handleValide={handleValide}
          user={user}
          checkedValidePaiment={checkedValidePaiment}
        />
      )}
      <RecapOrder
        valueDelivery={valueDelivery}
        total={total}
        showCartWines={showCartWines}
        setShowCartWines={setShowCartWines}
      />
    </div>
  );
}
