import { Box } from "@mui/material";
import Header from "../components/Home/Header";
import Offer from "../components/Home/Offer";
import Team from "../components/Home/Team";
import Youtube from "../components/Home/Youtube";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "background.primary" }}>
      <Header />
      <Offer />
      <Youtube />
      <Team />
    </Box>
  );
}
