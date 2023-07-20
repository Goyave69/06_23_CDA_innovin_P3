import React from "react";

export default function Pagination({ pageNumbers, paginate, currentPage }) {
  return (
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
  );
}
