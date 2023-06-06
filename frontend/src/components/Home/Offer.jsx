import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import offre1 from "../../assets/Home/offre1.jpg";
import offre2 from "../../assets/Home/offre2.jpg";
import offre3 from "../../assets/Home/offre3.jpg";

function Offer() {
  const products = [
    {
      id: 1,
      image: offre1,
      title: "Vins Bio",
      description:
        "Offrez-lui la seule box de vins qui lui permette de goûter pour faire son choix ! Un coffret de dégustation avec à l’intérieur 4 vinottes de vins d'AOC français bio, puis la bouteille de 75cl de son vin préféré !",
    },
    {
      id: 2,
      image: offre2,
      title: "Box vins premiers crus",
      description:
        "La seule box de vins 100% premiers crus de Bourgogne, qui permet de goûter et de faire son propre choix. Un coffret de dégustation de 4 vinottes de premiers crus de Bourgogne.",
    },
    {
      id: 3,
      image: offre3,
      title: "Box vins grand crus",
      description:
        "Une sélection de vins unique parmi ce qui se fait de mieux en Bourgogne. Un coffret Prestige composé de 4 vinottes en verre avec à l'intérieur de chacune, un grand cru de Bourgogne à découvrir.",
    },
  ];

  return (
    <div>
      <Typography
        sx={{
          color: "#DEB95D",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2rem" },
          textAlign: "center",
          padding: "2% 0 0 0 ",
        }}
      >
        UNE OFFRE SUR-MESURE
      </Typography>
      <Typography
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: { xs: "1rem", md: "1.3rem" },
          textAlign: "center",
          padding: "1% 0",
        }}
      >
        L'accompagnement de votre choix
      </Typography>
      <Box
        sx={{
          display: { sx: "block", md: "flex" },
          justifyContent: "space-around",
        }}
      >
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Card sx={{ maxWidth: 300, marginBottom: 5 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ objectFit: "contain" }}
                    component="img"
                    height="300"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <button
                  style={{
                    backgroundColor: "#DEB95D",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "none",
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "center",
                    display: "flex",
                    margin: "0 auto 10px auto",
                  }}
                  type="button"
                  onClick={() => console.warn("Ajouté au panier", product.id)}
                >
                  Ajouter au panier
                </button>
              </Card>
            </div>
          );
        })}
      </Box>
    </div>
  );
}

export default Offer;
