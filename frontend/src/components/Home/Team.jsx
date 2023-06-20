import { Typography, Box } from "@mui/material";
import CardHome from "./CardHome";
import sommeliers from "./TeamData";

function Team() {
  return (
    <Box sx={{ paddingBottom: 5 }}>
      <Typography
        variant="h4"
        sx={{
          color: "text.tertiary",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2rem" },
          textAlign: "center",
          padding: "2% 0 2% 0 ",
        }}
      >
        Notre équipe d'incroyables sommeliers
      </Typography>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-around",
        }}
      >
        {sommeliers.map((sommelier) => (
          <CardHome props={sommelier} showButton={false} />
        ))}
      </Box>
    </Box>
  );
}

export default Team;
