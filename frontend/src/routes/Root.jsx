import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: blue[500],
          },
          secondary: {
            main: blue[500],
          },
          divider: grey[200],
          background: {
            default: "#121212",
            card: blue[300],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: grey[600],
          },
          secondary: {
            main: grey[300],
          },
          divider: grey[500],
          background: {
            default: "#121212",
            card: grey[600],
          },
          text: {
            primary: "#fff",
            secondary: "#fff",
          },
        }),
  },
});

export default function Root() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme(getDesignTokens(darkMode ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Button onClick={toggleDarkMode}>Dark Mode</Button>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
