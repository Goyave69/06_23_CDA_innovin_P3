import React from "react";
import bp from "../../../assets/Cart/Payment/bp.png";
import sanscontact from "../../../assets/Cart/Payment/sanscontact.png";
import visa from "../../../assets/Cart/Payment/visa.png";

export default function VisualCardVirtuel({ dataCard, formatCardNumber }) {
  return (
    <div className="bg-[#34495e] flex mx-auto mt-5 rounded-2xl w-[60%] pt-[40%] overflow-hidden relative">
      <img className="absolute top-[25%] left-[5%] h-[23%]" src={bp} alt="" />
      <img
        className="absolute top-[28%] left-[25%] h-[15%]"
        src={sanscontact}
        alt=""
      />
      <img className="absolute bottom-5 right-5 h-[30%]" src={visa} alt="" />
      <p className="absolute top-[55%] left-[5%] text-lg text-white">
        {formatCardNumber(dataCard.number)}
      </p>
      <p className="absolute top-[68%] left-[5%] text-white">
        Expire {dataCard.expire}
      </p>
      <p className="absolute top-[78%] left-[5%] text-white">
        {dataCard.genre} {dataCard.firstname} {dataCard.lastname}
      </p>
    </div>
  );
}
