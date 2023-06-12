import { Typography, CardActionArea, Box, Divider } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Antho from "../../assets/Home/Anthony.jpg";
import Ryan from "../../assets/Home/Ryan.jpg";
import Mathieu from "../../assets/Home/Mathieu.jpg";

function Team() {
  const sommeliers = [
    {
      id: 1,
      image: Antho,
      title: "Anthony, notre sommelier anglophone",
      description:
        "Anthony Leveil est l’un des meilleurs spécialistes en vins de Bourgogne. Il est aussi instructeur à l’Ecole des Vins de Paris et grand formateur en vins de Bourgogne.",
    },
    {
      id: 2,
      image: Ryan,
      title: "Ryan, notre sommelier Francophone ",
      description:
        "Ryan Beaujot, notre sommelier globetrotter est un spécialiste de vins d'exception. Il est aussi formateur au Bureau Interprofessionnel des Vins de Bourgogne.",
    },
    {
      id: 3,
      image: Mathieu,
      title: "Mathieu, notre sommelier anglo-italien ",
      description:
        "Diplômée de l’Université de Londres Mathieu, au delà d’être un sommelier expérimenté, est également un animateur hors pair pour vos dégustations ! Il est spécialiste dans les vins du monde.",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "background.tertiary", paddingBottom: 30 }}>
      <Typography
        variant="h4"
        sx={{ color: "text.tertiary", textAlign: "center", padding: 20 }}
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
          <Card
            key={sommelier.id}
            sx={{
              maxWidth: 345,
              backgroundColor: "background.tertiary",
              color: "text.secondary",
              border: "1px solid White",
              py: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  margin: "0 auto",
                }}
                image={sommelier.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {sommelier.title}
                </Typography>
                <Divider sx={{ width: "50%", margin: "0 auto 10px auto" }} />
                <Typography variant="body2">{sommelier.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Team;
