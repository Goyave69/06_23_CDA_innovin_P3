/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import stringHelper from "../../services/stringHelper";

export default function WineCard({ wine }) {
  return (
    <div key={wine.id}>
      <Card
        sx={{
          maxWidth: 400,
          height: 550,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            height="300"
            image="https://visualeducation.com/wp-content/uploads/2017/07/karl-taylor-red-bottle-product-photography-2.jpg"
            alt={`Bouteille de ${wine.name}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {wine.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {wine.price} €
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {stringHelper.stringLimiter(wine.description, 100)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
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
          onClick={() => console.warn("Ajouté au panier", wine.id)}
        >
          Ajouter au panier
        </Button>
      </Card>
    </div>
  );
}
