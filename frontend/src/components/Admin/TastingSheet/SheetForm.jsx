import { TextField, Box, Button } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";

const inputFields = [
  {
    name: "degustation_date",
    label: "Date de dégustation",
    placeholder: "Date de dégustation",
    sx: { margin: "10px", width: "46%" },
  },
  {
    name: "shape",
    label: "Forme",
    placeholder: "Forme",
    sx: { margin: "10px", width: "46%" },
  },
  {
    name: "eye",
    label: "Visuel",
    placeholder: "Visuel",
    sx: { margin: "10px", width: "46%" },
  },
  {
    name: "nose",
    label: "Nez",
    placeholder: "Nez",
    sx: { margin: "10px", width: "46%" },
  },
  {
    name: "mouth",
    label: "Bouche",
    placeholder: "Bouche",
    sx: { margin: "10px", width: "95%" },
  },
  {
    name: "conclusion",
    label: "Conclusion",
    placeholder: "Conclusion",
    sx: { margin: "10px", width: "95%" },
  },
  {
    name: "note",
    label: "Note",
    placeholder: "Note",
    sx: { margin: "10px", width: "95%" },
  },
  {
    name: "commentaire",
    label: "Commentaire",
    placeholder: "Commentaire",
    sx: { margin: "10px", width: "95%" },
  },
];

export default function UserForm({ closeModal, setLoading }) {
  const [dataForm, setDataForm] = React.useState({
    degustation_date: "",
    shape: "",
    eye: "",
    nose: "",
    mouth: "",
    conclusion: "",
    note: "",
    commentaire: "",
    wine_id: 1,
    user_id: 1,
  });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    ApiHelper("tastingsheets", "post", dataForm)
      .then(() => {
        setLoading((prev) => !prev);
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
  setLoading: PropTypes.func.isRequired,
};
