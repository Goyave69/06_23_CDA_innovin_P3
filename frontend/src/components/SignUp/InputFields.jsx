import mail from "../../assets/Login/mail.png";
import userIcon from "../../assets/Login/user.png";
import vector from "../../assets/Login/Vector.png";
import adresse from "../../assets/Login/adresse.png";
import phone from "../../assets/Login/phone.png";

const inputFields = [
  {
    name: "firstname",
    label: "Prénom",
    placeholder: "Prénom",
    icon: userIcon,
  },
  { name: "lastname", label: "Nom", placeholder: "Nom", icon: userIcon },
  {
    name: "username",
    label: "Pseudo",
    placeholder: "Pseudo",
    icon: userIcon,
  },
  { name: "email", label: "Email", placeholder: "Email", icon: mail },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "Mot de passe",
    icon: vector,
  },
  {
    name: "address",
    label: "Adresse",
    placeholder: "Adresse",
    icon: adresse,
  },
  {
    name: "phone",
    label: "Numéro de Téléphone",
    placeholder: "Numéro de Téléphone",
    icon: phone,
  },
];

export default inputFields;
