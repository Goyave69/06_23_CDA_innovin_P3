import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";

export default function ContactForm() {
  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardHeader
        title={<Typography variant="h2">Contactez-nous</Typography>}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
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
