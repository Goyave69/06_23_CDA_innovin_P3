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
import WineRow from "./WineRow";
import WinePropTypes from "./WinePropTypes";

export default function TableWine({ wines, setLoadingWines }) {
  return (
    <TableContainer>
      <Table>
        <TableCaption placement="top">Table des Vins</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nom</Th>
            <Th>Année</Th>
            <Th>Type de vin</Th>
            <Th>Pays d'origine</Th>
            <Th>Region</Th>
            <Th>Variété de grappe</Th>
            <Th>Description</Th>
            <Th>Meilleure vente</Th>
            <Th>Image</Th>
            <Th>Prix</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {wines.map((wine) => (
            <WineRow
              key={wine.id}
              wine={wine}
              setLoadingWines={setLoadingWines}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

TableWine.propTypes = {
  wines: PropTypes.arrayOf(PropTypes.shape(WinePropTypes)).isRequired,
  setLoadingWines: PropTypes.func.isRequired,
};
