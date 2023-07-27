import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import {
  FaWineBottle,
  FaUserFriends,
  FaRegNewspaper,
  FaShoppingCart,
  FaBox,
} from "react-icons/fa";
import ApiHelper from "../../../services/apiHelper";
import StatsCard from "./StatsCard";

export default function Dashboard() {
  const [users, setUsers] = React.useState([]);
  const [wines, setWines] = React.useState([]);
  const [articles, setArticles] = React.useState([]);
  const [carts, setCarts] = React.useState([]);

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
    ApiHelper("articles", "get")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [articles]);

  React.useEffect(() => {
    ApiHelper("allCarts", "get")
      .then((res) => {
        setCarts(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [carts]);

  const tables = [
    {
      title: "Utilisateur",
      stat: users.length,
      icon: <FaUserFriends size="3em" />,
    },
    {
      title: "Vin",
      stat: wines.length,
      icon: <FaWineBottle size="3em" />,
    },
    {
      title: "Articles",
      stat: articles.length,
      icon: <FaRegNewspaper size="3em" />,
    },
    {
      title: "Panier",
      stat: carts.length,
      icon: <FaShoppingCart size="3em" />,
    },
    {
      title: "Commandes",
      stat: carts.filter((cart) => cart.is_order === 1).length,
      icon: <FaBox size="3em" />,
    },
  ];

  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
        Que fait notre compagnie ?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {tables.map((data) => (
          <StatsCard
            key={data.title}
            title={data.title}
            stat={data.stat}
            icon={data.icon}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
