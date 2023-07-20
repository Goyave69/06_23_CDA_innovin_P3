import React from "react";
import imgProfil from "../../assets/Profil/imgPicture.png";
import { useUserContext } from "../../services/Context/UserContext";

export default function ProfilUser() {
  const user = useUserContext();

  return (
    <div className=" h-[80vh] border-r w-1/5 mt-2">
      <img className="rounded-full h-40 mx-auto" src={imgProfil} alt="" />
      <ul className="ml-4">
        <li className="mb-3">
          <span className="underline font-bold">Identité :</span>{" "}
          {user.firstname} {user.lastname}
        </li>
        <li className="mb-3">
          <span className="underline font-bold">Adresse :</span> {user.address}
        </li>
        <li className="mb-3">
          <span className="underline font-bold">Téléphone :</span> {user.phone}
        </li>
      </ul>
    </div>
  );
}
