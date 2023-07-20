/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const { VITE_BACKEND_URL } = import.meta.env;

export default function RecapOrderProfil() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${VITE_BACKEND_URL}/orders`)
      .then((res) =>
        setOrders(res.data).filter((word) => word.content[0].name !== null)
      );
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(7);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = orders.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orders.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-4/5">
      <h2 className="text-gray-600 underline text-center my-2 text-2xl">
        Récapitulatif des commandes
      </h2>
      <hr />
      <div className=" overflow-auto h-[70vh]">
        {currentArticles.toReversed().map((order) => (
          <Accordion key={order.id} className="p-2 border" allowMultiple>
            <AccordionItem>
              <AccordionButton className="flex relative justify-between">
                <>
                  <p>{order.content[0].order_date?.slice(0, 11)}</p>
                </>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel className="flex item-center justify-around py-4">
                {order?.content?.map((item) => (
                  <div className="flex" key={item.wineId}>
                    <NavLink to={`/wine/${item.wineId}`} className="mr-4">
                      <img
                        className="h-32"
                        src={`${VITE_BACKEND_URL}/uploads/${item.wineImage}`}
                        alt=""
                      />
                    </NavLink>
                    <div>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{item.quantity}</p>
                      <p>total : {(item.price * item.quantity).toFixed(2)} €</p>
                    </div>
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div className="flex justify-center">
        {pageNumbers.map((number) => (
          <button
            type="button"
            key={number}
            onClick={() => paginate(number)}
            className={
              currentPage === number
                ? "text-red-500 font-bold underline pr-2 text-3xl"
                : "text-black font-bold pr-2 text-2xl"
            }
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
