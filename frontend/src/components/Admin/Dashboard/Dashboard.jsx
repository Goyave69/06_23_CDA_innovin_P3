import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Stack,
  Container,
  Box,
  Link,
} from "@mui/material";
import * as React from "react";
import ApiHelper from "../../../services/apiHelper";

export default function Dashboard() {
  const [users, setUsers] = React.useState([]);
  const [wines, setWines] = React.useState([]);

  React.useEffect(() => {
    ApiHelper("users", "get")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
    ApiHelper("wines", "get")
      .then((res) => {
        setWines(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [users, wines]);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        my={5}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Link
            href="/admin"
            underline="hover"
            color="text.primary"
            sx={{ p: "10px" }}
          >
            Dashboard
          </Link>
          <p style={{ padding: "10px" }}>/</p>
          <Link
            href="/admin/wine"
            underline="hover"
            color="text.primary"
            sx={{ p: "10px" }}
          >
            Wine
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" alignItems="center" my={5}>
        <Card sx={{ maxWidth: "300px", height: "150px", m: 5 }}>
          <CardActionArea>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="text.primary">
                {users.length}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Users
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: "300px", height: "150px", m: 5 }}>
          <CardActionArea>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="text.primary">
                {wines.length}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Wines
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Container>
  );
}
