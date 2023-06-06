import "./App.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import bgHome from "./assets/bg-home.jpg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: `url(${bgHome}) no-repeat center center fixed`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <CssBaseline />
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
