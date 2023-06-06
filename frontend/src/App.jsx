import "./App.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Header from "./components/Home/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Home />
        <CssBaseline />
        <Navbar />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
