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
import ArticleRow from "./ArticleRow";
import ArticlePropTypes from "./ArticlePropTypes";

export default function TableArticle({ articles, setLoadingArticles }) {
  return (
    <TableContainer>
      <Table>
        <TableCaption placement="top">Table des Articles</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Titre</Th>
            <Th>Contenu</Th>
            <Th>Auteur</Th>
            <Th>Catégorie</Th>
            <Th>Date de publication</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {articles.map((article) => (
            <ArticleRow
              key={article.id}
              article={article}
              setLoadingArticles={setLoadingArticles}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

TableArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(ArticlePropTypes)).isRequired,
  setLoadingArticles: PropTypes.func.isRequired,
};
