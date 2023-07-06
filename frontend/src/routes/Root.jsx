import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import getDesignTokens from "../theme";

export default function Root() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme(getDesignTokens(darkMode ? "dark" : "light"));

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <main>
          <Outlet />
        </main>
        <ToastContainer />
      </ThemeProvider>
    </ChakraProvider>
  );
}
