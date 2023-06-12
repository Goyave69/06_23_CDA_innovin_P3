import * as React from "react";
import {
  Container,
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
    <Container
      sx={{
        width: { sm: "100%", md: "50%" },
        height: "80vh",
        backgroundColor: "background.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h2"
            sx={{ color: "text.tertiary", textAlign: "center", margin: "10px" }}
          >
            Contactez-nous
          </Typography>
        }
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <FormControl sx={{ margin: "10px" }}>
          <Select value={subject} label="Sujet" onChange={handleChange}>
            <MenuItem value="Service client">Service client</MenuItem>
            <MenuItem value="Vigneron">Vigneron</MenuItem>
            <MenuItem value="Partenariat">Partenariat</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex" }}>
          <TextField
            required
            id="outlined"
            label="Prénom"
            placeholder="jhon"
            sx={{ margin: "10px", width: "50%" }}
          />
          <TextField
            required
            id="outlined"
            label="Nom"
            placeholder="Doe"
            sx={{ margin: "10px", width: "50%" }}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <TextField
            required
            id="outlined-required"
            label="Adresse e-mail"
            placeholder="jhon@doe.com"
            sx={{ margin: "10px", width: "50%" }}
          />
          <TextField
            required
            id="outlined"
            label="Téléphone"
            placeholder="+33 1 11 11 11 11"
            sx={{ margin: "10px", width: "50%" }}
          />
        </Box>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          sx={{ margin: "10px" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px",
            color: "text.secondary",
            fontSize: { xs: "0.8rem", md: "1.1rem" },
          }}
        >
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
        <Button
          sx={{
            margin: "10px",
            color: "text.primary",
            backgroundColor: "background.secondary",
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", md: "1.1rem" },
          }}
        >
          Envoyer
        </Button>
      </CardContent>
    </Container>
  );
}
