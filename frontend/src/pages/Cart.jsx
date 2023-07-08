import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiHelper from "../services/apiHelper";
import CartWines from "../components/Cart/CartWines";
import RecapOrder from "../components/Cart/RecapOrder";
import Payment from "../components/Cart/Payment/Payment";

const { VITE_BACKEND_URL } = import.meta.env;

export default function CartBis() {
  const [dataCart, setDataCart] = useState([]);
  const [reloadCart, setReloadCart] = useState(false);
  const [showModalConfirme, setShowModalConfirme] = useState(false);
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
    axios.delete(`${VITE_BACKEND_URL}/cartwines/${id}`).then(() => {
      setReloadCart(!reloadCart);
      setShowModalConfirme(false);
    });
  };

  useEffect(() => {
    ApiHelper("carts", "get").then((res) => {
      setDataCart(res.data);
    });
  }, [reloadCart]);

  const [showCartWines, setShowCartWines] = useState(true);

  const handleProps = () => {
    return {
      dataCart: dataCart,
      setSelectedWine: setSelectedWine,
      setShowModalConfirme: setShowModalConfirme,
      showModalConfirme: showModalConfirme,
      selectedWine: selectedWine,
      handleDelete: handleDelete,
      showCartWines: showCartWines,
      setShowCartWines: setShowCartWines,
      total: total,
    };
  };

  return (
    <div className="flex">
      {showCartWines ? (
        <CartWines {...handleProps()} />
      ) : (
        <Payment {...handleProps()} />
      )}
      <RecapOrder {...handleProps()} />
    </div>
  );
}
