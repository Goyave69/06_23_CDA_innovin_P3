import React from "react";
import bp from "../../../assets/Cart/Payment/bp.png";
import sanscontact from "../../../assets/Cart/Payment/sanscontact.png";
import visa from "../../../assets/Cart/Payment/visa.png";

export default function VisualCardVirtuel({ dataCard }) {
  function formatCardNumber(cardNumber) {
    const array = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
      array.push(cardNumber.substr(i, 4));
    }
    return array.join(" - ");
  }
  return (
    <div className="bg-[#34495e] flex mx-auto mt-5 rounded-2xl w-[60%] pt-[40%] overflow-hidden relative">
      <img className="absolute top-[25%] left-[5%] h-[23%]" src={bp} alt="" />
      <img
        className="absolute top-[28%] left-[25%] h-[15%]"
        src={sanscontact}
        alt=""
      />
      <div className="absolute top-[15%] right-[0%] h-8 rounded-tl-md rounded-bl-md  w-20 bg-orange-200" />
      <img className="absolute bottom-5 right-5 h-[20%]" src={visa} alt="" />
      <p className="absolute top-[52%] left-[20%] text-xl text-white">
        {formatCardNumber(dataCard.number)}
      </p>
      <p className="absolute top-[73%] left-[49%] text-[6px] text-white">
        EXPIRE <br /> A FIN
      </p>
      <p className="absolute top-[68%] left-[57%] text-xl text-white">
        {dataCard.expire}
      </p>
      <p className="absolute top-[80%] left-[5%] text-white">
        {dataCard.genre} {dataCard.firstname} {dataCard.lastname}
      </p>
      <p className="absolute top-[16%] right-[10%] text-black font-semibold">
        {dataCard.cvv}
      </p>
    </div>
  );
}
