import React from "react";
import imgProfil from "../../assets/Profil/imgPicture.png";
import getCookie from "../../services/cookieHelper";

export default function ProfilUser() {
  const user = getCookie("user");
  const userProfil = JSON.parse(user.slice(2));

  return (
    <div className=" h-[80vh] border-r w-1/5 mt-2">
      <img className="rounded-full h-40 mx-auto" src={imgProfil} alt="" />
      <ul className="text-center">
        <li className="mb-3">
          Identité : {userProfil.firstname} {userProfil.lastname}
        </li>
        <li className="mb-3">Adresse : {userProfil.address}</li>
        <li className="mb-3">Téléphone : {userProfil.phone}</li>
      </ul>
    </div>
  );
}
