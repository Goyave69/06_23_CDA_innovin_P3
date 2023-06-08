export default function getDesignTokens(mode) {
  return {
    typography: {
      fontFamily: `"Playfair Display", serif`,
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            divider: "#DEB95D", // Jaune doré
            background: {
              primary: "#3F433E", // Vert Kaki
              secondary: "#DEB95D", // Jaune doré
              tertiary: "#000000", // Black
            },
            text: {
              primary: "#000000", // Black
              secondary: "#ffffff", // White
              tertiary: "#DEB95D", // Jaune doré
            },
          }
        : {
            // palette values for dark mode
            divider: "#DEB95D", // Jaune doré
            background: {
              primary: "#3F433E", // Vert Kaki
              secondary: "#DEB95D", // Jaune doré
              tertiary: "#000000", // Black
            },
            text: {
              primary: "#ffffff", // White
              secondary: "#000000", // Black
              tertiary: "#DEB95D", // Jaune doré
            },
          }),
    },
  };
}
