import { TextField, Box, Button } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";

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

export default function UserForm({ closeModal, setLoadingUsers }) {
  const [dataForm, setDataForm] = React.useState({
    name: "",
    year: 1994,
    wine_type: "",
    origin_country: "",
    region: "",
    grape_variety: "",
    description: "",
    best_seller: false,
    image: "/",
    price: 0,
  });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    ApiHelper("wines", "post", dataForm)
      .then(() => {
        setLoadingUsers((prev) => !prev);
        closeModal();
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
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
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Button onClick={closeModal}>Retour</Button>
        <Button onClick={onSubmit}>Ajouter</Button>
      </Box>
    </Box>
  );
}

UserForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setLoadingUsers: PropTypes.func.isRequired,
};
