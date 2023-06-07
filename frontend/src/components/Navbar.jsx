import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import WineBarIcon from "@mui/icons-material/WineBar";
import { NavLink } from "react-router-dom";

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
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ backgroundColor: "transparent" }}
              >
                <NavLink
                  to="/"
                  style={{
                    textAlign: "center",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  ACCUEIL
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ backgroundColor: "transparent" }}
              >
                <NavLink
                  to="/wine"
                  style={{
                    textAlign: "center",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  NOS VINS
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ backgroundColor: "transparent" }}
              >
                <NavLink
                  to="/contact"
                  style={{
                    textAlign: "center",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  CONTACT
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ backgroundColor: "transparent" }}
              >
                <NavLink
                  to="/connect"
                  style={{
                    textAlign: "center",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  CONNEXION
                </NavLink>
              </MenuItem>
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
                alignItems: "center",
              }}
            >
              <NavLink
                to="/"
                style={{
                  color: "black",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              >
                ACCUEIL
              </NavLink>
              <NavLink
                to="/wine"
                style={{
                  color: "black",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              >
                NOS VINS
              </NavLink>
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
                alignItems: "center",
              }}
            >
              <NavLink
                to="/contact"
                style={{
                  color: "black",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              >
                CONTACT
              </NavLink>
              <NavLink
                to="/connect"
                style={{
                  color: "black",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              >
                CONNEXION
              </NavLink>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
