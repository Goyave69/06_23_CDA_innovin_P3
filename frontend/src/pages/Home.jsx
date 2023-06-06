import Offer from "../components/Home/Offer";
import Team from "../components/Home/Team";
import Youtube from "../components/Home/Youtube";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#3F433E" }}>
      <Offer />
      <Youtube />
      <Team />
    </div>
  );
}
