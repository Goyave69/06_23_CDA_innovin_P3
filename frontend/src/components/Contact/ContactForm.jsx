import * as React from "react";

export default function ContactForm() {
  const [checked, setChecked] = React.useState(null);

  const [dataFormContact, setDataFormContact] = React.useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setDataFormContact({ ...dataFormContact, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex flex-col h-[90vh] w-[50%] ">
      <h2 className="text-3xl font-bold text-center pt-20 px-32 ">
        Contactez-nous
      </h2>
      <div className="flex flex-col px-24">
        <select
          className="m-3 p-2 rounded-lg shadow-lg border border-black"
          name="subject"
          label="Sujet"
          onChange={handleChange}
        >
          <option value="Service client">Service client</option>
          <option value="Vigneron">Vigneron</option>
          <option value="Partenariat">Partenariat</option>
        </select>
        <div className="flex w-full ">
          <input
            className="m-3 w-[50%] shadow-lg p-2 rounded-lg border border-black"
            label="Prénom"
            name="firstName"
            placeholder="john"
            onChange={handleChange}
          />
          <input
            className="m-3 w-[50%] shadow-lg p-2 rounded-lg border border-black"
            label="Nom"
            name="lastName"
            placeholder="Doe"
            onChange={handleChange}
          />
        </div>
        <div className="flex">
          <input
            className="m-3 w-[50%] shadow-lg p-2 rounded-lg border border-black"
            label="Adresse e-mail"
            name="email"
            onChange={handleChange}
            placeholder="jhon@doe.com"
          />
          <input
            className="m-3 w-[50%] shadow-lg p-2 border rounded-lg border-black"
            label="Téléphone"
            name="phone"
            onChange={handleChange}
            placeholder="+33 1 11 11 11 11"
          />
        </div>
        <textarea
          name="message"
          onChange={handleChange}
          placeholder="message"
          className="rounded-lg pl-2 border m-3 shadow-lg border-black"
        />
        <div className="flex items-center m-3 ">
          <input
            className="mx-4"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            type="checkbox"
          />
          <p>
            J'accepte les conditions générales et la politique de
            confidentialité
          </p>
        </div>
        <button
          type="button"
          className="my-3 border border-black py-2 rounded-lg m-3 bg-black text-white hover:bg-white hover:text-black "
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
