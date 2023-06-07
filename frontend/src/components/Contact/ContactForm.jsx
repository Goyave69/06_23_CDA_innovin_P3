import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

export default function ContactForm() {
  const [subject, setSubject] = React.useState("");

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardHeader
        title={<Typography variant="h2">Contactez-nous</Typography>}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl color="secondary">
          <Select value={subject} label="Sujet" onChange={handleChange}>
            <MenuItem value="Service client">Service client</MenuItem>
            <MenuItem value="Vigneron">Vigneron</MenuItem>
            <MenuItem value="Partenariat">Partenariat</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Adresse e-mail"
          placeholder="jhon@doe.com"
        />
        <TextField
          id="outlined-helperText"
          label="Message"
          helperText="Laissez-nous un message"
        />
      </CardContent>
    </Card>
  );
}
