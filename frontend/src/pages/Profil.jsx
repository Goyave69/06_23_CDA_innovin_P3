import React from "react";
import ProfilUser from "../components/Profil/ProfilUser";
import RecapOrderProfil from "../components/Profil/RecapOrderProfil";

export default function Profil() {
  return (
    <div className="flex">
      <ProfilUser />
      <RecapOrderProfil />
    </div>
  );
}
