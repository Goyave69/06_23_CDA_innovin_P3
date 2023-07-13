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
import TableUser from "./TableUser";
import UserModal from "./UserModal";

export default function AdminUser() {
  const [users, setUsers] = React.useState([]);
  const [loadingUsers, setLoadingUsers] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    ApiHelper("users", "get")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [loadingUsers]);

  return (
    <Container maxW="container.xl" mx="16">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <HStack p="4">
          <Link href="/admin">Dashboard</Link>
          <p style={{ padding: "10px" }}>/</p>
          <Link href="/admin/user">User</Link>
        </HStack>
        <Spacer />
        <Button onClick={onOpen} colorScheme="blue" p="4">
          Nouvel utilisateur
        </Button>
      </Flex>
      <TableUser users={users} setLoadingUsers={setLoadingUsers} />
      <UserModal
        isOpen={isOpen}
        onClose={onClose}
        setLoadingUsers={setLoadingUsers}
      />
    </Container>
  );
}
