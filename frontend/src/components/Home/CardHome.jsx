/* eslint-disable react/prop-types */
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Button,
} from "@mui/material";

import { Box } from "@mui/system";
import stringHelper from "../../services/stringHelper";

export default function CardHome({ props, showButton = true }) {
  return (
    <div key={props.id}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "30vw",
          minWidth: "26vw",
          minHeight: "26vw",
          margin: "auto",
          marginBottom: "3px",
          backgroundColor: "white",
          color: "black",
          borderRadius: "4px",
          border: "1px solid black",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              width: "192px",
              height: "160px",
              marginTop: "3px",
              borderRadius: "50%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            image={props.image}
            alt="green iguana"
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                style={{ textAlign: "center", paddingBottom: "4px" }}
              >
                {props.title ? props.title : props.name}
              </Typography>
              {props.price && (
                <Typography
                  style={{ textAlign: "center", paddingBottom: "4px" }}
                >
                  {props.price} €
                </Typography>
              )}
            </Box>
            <Divider sx={{ width: "50%", margin: "0 auto 10px auto" }} />

            <Typography variant="body2">
              {stringHelper.stringLimiter(props.description, 100)}
            </Typography>
          </CardContent>
        </CardActionArea>
        {showButton && (
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
            onClick={() => console.warn("Ajouté au panier", props.id)}
          >
            Voir plus
          </Button>
        )}
      </Card>
    </div>
  );
}
