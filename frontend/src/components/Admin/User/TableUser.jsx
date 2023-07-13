import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
import UserRow from "./UserRow";
import UserPropTypes from "./UserPropTypes";

export default function TableUser({ users, setLoadingUsers }) {
  return (
    <TableContainer>
      <Table>
        <TableCaption placement="top">Table des Utilisateurs</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Prénom</Th>
            <Th>Nom</Th>
            <Th>Pseudo</Th>
            <Th>Rôle</Th>
            <Th>E-mail</Th>
            <Th>Adresse</Th>
            <Th>Téléphone</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              setLoadingUsers={setLoadingUsers}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

TableUser.propTypes = {
  users: PropTypes.arrayOf(UserPropTypes).isRequired,
  setLoadingUsers: PropTypes.func.isRequired,
};
