import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Stack,
  Container,
  Box,
  Link,
  SvgIcon,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import LiquorIcon from "@mui/icons-material/Liquor";
import ListAltIcon from "@mui/icons-material/ListAlt";
import * as React from "react";
import ApiHelper from "../../../services/apiHelper";
import Donut from "../Donut";

export default function Dashboard() {
  const [users, setUsers] = React.useState([]);
  const [wines, setWines] = React.useState([]);
  const [sheet, setSheet] = React.useState([]);
  const graph = [users.length, wines.length, sheet.length];

  React.useEffect(() => {
    ApiHelper("users", "get")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [users]);

  React.useEffect(() => {
    ApiHelper("wines", "get")
      .then((res) => {
        setWines(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [wines]);

  React.useEffect(() => {
    ApiHelper("tastingsheets", "get")
      .then((res) => {
        setSheet(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [sheet]);

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
            underline="none"
            color="text.primary"
            sx={{ p: "10px" }}
          >
            Dashboard
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" my={5}>
        <Card sx={{ m: 5 }}>
          <CardActionArea href="/admin/user">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                p: 0,
                width: "15vw",
                height: "30vh",
              }}
            >
              <SvgIcon fontSize="large">
                <PeopleIcon />
              </SvgIcon>
              <Typography fontSize="3rem" variant="body2" color="text.primary">
                {users.length}
              </Typography>
              <Typography variant="h5" component="div">
                Users
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ m: 5 }}>
          <CardActionArea href="/admin/wine">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                p: 0,
                width: "15vw",
                height: "30vh",
              }}
            >
              <SvgIcon fontSize="large">
                <LiquorIcon />
              </SvgIcon>
              <Typography fontSize="3rem" variant="body2" color="text.primary">
                {wines.length}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Wines
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ m: 5 }}>
          <CardActionArea href="/admin/tasting_sheet">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                p: 0,
                width: "15vw",
                height: "30vh",
              }}
            >
              <SvgIcon fontSize="large">
                <ListAltIcon />
              </SvgIcon>
              <Typography fontSize="3rem" variant="body2" color="text.primary">
                {sheet.length}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Tasting Sheet
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "25vw",
            height: "25vh",
          }}
        >
          <Donut count={graph} />
        </Card>
      </Box>
    </Container>
  );
}
