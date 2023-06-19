/* eslint-disable react/prop-types */
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

export default function CardHome({ props }) {
  return (
    <div>
      <Card
        key={props.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "30vw",
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
            <Typography style={{ textAlign: "center", paddingBottom: "4px" }}>
              {props.title}
            </Typography>
            <Divider sx={{ width: "50%", margin: "0 auto 10px auto" }} />
            <Typography variant="body2">{props.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
