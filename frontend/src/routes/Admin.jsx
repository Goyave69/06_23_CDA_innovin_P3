import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import getDesignTokens from "../theme";
import NavTop from "../components/Admin/NavTop";
import SideBar from "../components/Admin/SideBar";

export default function Root() {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme(getDesignTokens(darkMode ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <NavTop
        onNavOpen={() => setOpenNav(true)}
        toggleDarkMode={toggleDarkMode}
      />
      <SideBar onClose={() => setOpenNav(false)} open={openNav} />
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          maxWidth: "100%",
          height: "100vh",
          paddingLeft: { lg: "280px" },
          backgroundColor: "background.secondary",
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
