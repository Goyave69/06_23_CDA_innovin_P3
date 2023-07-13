import * as React from "react";
import inputFields from "./InputFields";

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
    <div className=" flex flex-col h-[90vh] md:w-[50%] px-24 ">
      <h2 className="text-3xl font-bold text-center pt-20 mb-4 md:mb-0">
        Contactez-nous
      </h2>
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
      <div className="flex flex-wrap ">
        {inputFields.map((input) => (
          <input
            className={input.className}
            name={input.name}
            placeholder={input.placeholder}
            onChange={handleChange}
          />
        ))}
      </div>
      <textarea
        name="message"
        onChange={handleChange}
        placeholder="Message"
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
          J'accepte les conditions générales et la politique de confidentialité
        </p>
      </div>
      <button
        type="button"
        className="my-3 border border-black py-2 rounded-lg m-3 bg-black text-white hover:bg-white hover:text-black "
      >
        Envoyer
      </button>
    </div>
  );
}
