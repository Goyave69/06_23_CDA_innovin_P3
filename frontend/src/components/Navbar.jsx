import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import WineBarIcon from "@mui/icons-material/WineBar";

const pages = ["Accueil", "Nos Vins", "Contact", "Se Connecter/s'inscrire"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [navbarTransparent, setNavbarTransparent] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setNavbarTransparent(isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: navbarTransparent ? "transparent" : "white",
        transition: "background-color 0.5s",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{ backgroundColor: "transparent" }}
                >
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <WineBarIcon />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              INNO'VIN
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "40%",
                justifyContent: "space-around",
              }}
            >
              {pages.slice(0, 2).map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    marginRight: "10px",
                    color: "black",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mx: "auto",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  borderBottom: "1px solid #CBAF96",
                  borderLeft: "1px solid #CBAF96",
                  borderRight: "1px solid #CBAF96",
                  letterSpacing: ".3rem",
                  px: "10px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                INNO'VIN
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "40%",
                justifyContent: "space-around",
              }}
            >
              {pages.slice(2).map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    color: "black",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
