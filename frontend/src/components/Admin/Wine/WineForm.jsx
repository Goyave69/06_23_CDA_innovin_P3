import { TextField, Box, Button } from "@mui/material";
import React, { useRef } from "react";
import PropTypes from "prop-types";

const inputFields = [
  {
    name: "name",
    label: "Nom",
    placeholder: "Beaujolais",
    sx: { margin: "10px", width: "46%" },
    props: {},
  },
  {
    name: "year",
    label: "Année",
    placeholder: "1994",
    sx: { margin: "10px", width: "46%" },
    props: { inputMode: "numeric", pattern: "[0-9]*" },
  },
  {
    name: "wine_type",
    label: "Type de vin",
    placeholder: "Blanc, Rouge, Rosé",
    sx: { margin: "10px", width: "46%" },
    props: {},
  },
  {
    name: "origin_country",
    label: "Pays d'origin",
    placeholder: "France",
    sx: { margin: "10px", width: "46%" },
    props: {},
  },
  {
    name: "region",
    label: "Région",
    placeholder: "Bourgogne",
    sx: { margin: "10px", width: "46%" },
    props: {},
  },
  {
    name: "grape_variety",
    label: "Variété de grappe",
    placeholder: "Chardonnay",
    sx: { margin: "10px", width: "46%" },
    props: {},
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Exemple",
    sx: { margin: "10px", width: "95%" },
    props: {},
  },
  {
    name: "price",
    label: "Prix",
    placeholder: "14",
    sx: { margin: "10px", width: "95%" },
    props: { inputMode: "numeric", pattern: "[0-9]*" },
  },
];

export default function UserForm({ closeModal, setLoading }) {
  const [dataForm, setDataForm] = React.useState({
    name: "",
    year: "",
    wine_type: "",
    origin_country: "",
    region: "",
    grape_variety: "",
    description: "",
    best_seller: false,
    image: "",
    price: "",
  });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataForm.image) {
      const myHeaders = new Headers();
      const wine = JSON.stringify(dataForm);
      const formData = new FormData();

      formData.append("wine", wine);
      formData.append("picture", inputRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };
      fetch(`http://localhost:5000/wines`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          closeModal();
          setLoading(true);
        })
        .catch(console.error);
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {inputFields.map((field) => (
          <TextField
            onChange={handleChange}
            key={field.name}
            required
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            inputProps={field.props}
            sx={field.sx}
          />
        ))}
        <input
          type="file"
          onChange={handleChange}
          ref={inputRef}
          name="image"
          className="my-4"
          value={dataForm.image}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Button onClick={closeModal}>Retour</Button>
        <Button onClick={handleSubmit}>Ajouter</Button>
      </Box>
    </Box>
  );
}

UserForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
