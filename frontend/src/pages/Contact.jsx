import { Box } from "@mui/material";
import ContactForm from "../components/Contact/ContactForm";
import bgHome from "../assets/bg-home.jpg";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: `url(${bgHome}) no-repeat bottom center fixed`,
          backgroundSize: "cover",
          width: { sm: "100%", md: "50%" },
          height: "80vh",
        }}
      />
      <ContactForm />
    </Box>
  );
}
