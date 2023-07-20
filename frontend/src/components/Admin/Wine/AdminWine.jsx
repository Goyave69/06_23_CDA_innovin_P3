import {
  useDisclosure,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Spacer,
} from "@chakra-ui/react";
import * as React from "react";
import ApiHelper from "../../../services/apiHelper";
import TableWine from "./TableWine";
import WineModal from "./WineModal";

export default function AdminWine() {
  const [wines, setWines] = React.useState([]);
  const [loadingWines, setLoadingWines] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    ApiHelper("wines", "get")
      .then((res) => {
        setWines(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [loadingWines]);

  return (
    <Container maxW="container.xl" mx="16">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <HStack p="4">
          <Link href="/admin">Dashboard</Link>
          <p style={{ padding: "10px" }}>/</p>
          <Link href="/admin/wines">Wines</Link>
        </HStack>
        <Spacer />
        <Button onClick={onOpen} colorScheme="blue" p="4">
          Nouveau vin
        </Button>
      </Flex>
      <TableWine wines={wines} setLoadingWines={setLoadingWines} />
      <WineModal
        isOpen={isOpen}
        onClose={onClose}
        setLoadingWines={setLoadingWines}
      />
    </Container>
  );
}
