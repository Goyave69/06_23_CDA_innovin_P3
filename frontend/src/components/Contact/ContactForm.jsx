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
  Checkbox,
  FormControlLabel,
  Box,
  Button,
} from "@mui/material";

export default function ContactForm() {
  const [subject, setSubject] = React.useState("");
  const [checked, setChecked] = React.useState(null);

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  return (
    <Card sx={{ width: "50%" }}>
      <CardHeader
        title={
          <Typography variant="h2" sx={{ textAlign: "center", margin: "10px" }}>
            Contactez-nous
          </Typography>
        }
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl color="secondary" sx={{ margin: "10px" }}>
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
          sx={{ margin: "10px" }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          sx={{ margin: "10px" }}
        />
        <Box sx={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
          />
          J'accepte les conditions générales et la politique de confidentialité
        </Box>
        <Button sx={{ margin: "10px" }}>Envoyer</Button>
      </CardContent>
    </Card>
  );
}
