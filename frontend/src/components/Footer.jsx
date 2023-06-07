import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

const linkedInUrl = "https://www.linkedin.com/in/votre_profil";

const team = [
  {
    name: "Anthony",
  },
  {
    name: "Ryan",
  },
  {
    name: "Mathieu",
  },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3F433E",
        color: "white",
        py: 2,
      }}
    >
      <Container maxWidth="lg" sx={{ margin: "0 auto", width: "100%" }}>
        <Grid container spacing={2}>
          {team.map((person) => (
            <Grid
              key={person.name}
              item
              xs={12}
              sm={4}
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h6" component="h2" gutterBottom>
                {person.name}
              </Typography>
              <IconButton
                component={Link}
                href={linkedInUrl}
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="LinkedIn"
              >
                <LinkedInIcon color="primary" fontSize="large" />
              </IconButton>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography color="inherit" align="center">
            &copy; {new Date().getFullYear()} Wild Code School - Tous droits
            réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
