import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import ApiHelper from "../../services/apiHelper";

function CreationModalWrapped({ columns }) {
  const generateBaseFormData = (cols) => {
    let res = {};
    cols.forEach((col) => {
      if (col.Type === "date")
        res = { ...res, [col.Field]: new Date().toISOString().split("T")[0] };
      else res = { ...res, [col.Field]: "" };
    });
    return res;
  };

  // callback function will only be invoked on the initial render
  const [formData, setFormData] = useState(() => generateBaseFormData(columns));

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateInput = (col) => {
    switch (true) {
      case col.Field.includes("id"):
        return null;
      case col.Field === "avatar":
        return (
          <Button key={col.Field} variant="contained" component="label">
            Upload File
            <input type="file" hidden />
          </Button>
        );
      case col.Field.includes("date"):
        return (
          <TextField
            key={col.Field}
            id={col.Field}
            label={col.Field}
            value={formData[col.Field]}
            onChange={handleInput}
            name={col.Field}
            type="date"
            required={col.Null === "NO"}
            variant="standard"
          />
        );
      default:
        return (
          <TextField
            key={col.Field}
            id={col.Field}
            label={col.Field}
            value={formData[col.Field]}
            onChange={handleInput}
            name={col.Field}
            type={col.Field === "password" ? "password" : "text"}
            required={col.Null === "NO"}
            variant="standard"
          />
        );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        gap: 10,
        backgroundColor: "#DDD",
      }}
    >
      {columns.length > 0 && columns.map((column) => generateInput(column))}
      <Button
        onClick={() => {
          console.info(columns);
        }}
      >
        Log Columns
      </Button>
      <Button
        onClick={() => {
          console.info(formData);
        }}
      >
        Log FormData
      </Button>
    </div>
  );
}

export default function CreationModal({ tableName }) {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    ApiHelper(`${tableName}/columns`, "get").then((colRes) => {
      setColumns(colRes.data);
    });
  }, []);
  return (
    <div>
      {columns.length > 0 && <CreationModalWrapped columns={columns} />}
    </div>
  );
}

CreationModalWrapped.propTypes = {
  columns: PropTypes.PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

CreationModal.propTypes = {
  tableName: PropTypes.string.isRequired,
};
