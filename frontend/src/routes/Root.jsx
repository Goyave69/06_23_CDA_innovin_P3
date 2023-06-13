import { createTheme, ThemeProvider } from "@mui/material/styles";
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
    <ThemeProvider theme={theme}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
