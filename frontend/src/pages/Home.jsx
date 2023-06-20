import { Box } from "@mui/material";
import Header from "../components/Home/Header";
import Offer from "../components/Home/Offer";
import Team from "../components/Home/Team";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "background.primary" }}>
      <Header />
      <Offer />
      <Team />
    </Box>
  );
}
