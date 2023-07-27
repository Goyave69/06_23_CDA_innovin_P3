/* eslint-disable camelcase */
import { useState } from "react";
import {
  Input,
  Tr,
  Td,
  Icon,
  HStack,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FiEdit, FiCheckSquare, FiDelete } from "react-icons/fi";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";
import ArticlePropTypes from "./ArticlePropTypes";
import stringHelper from "../../../services/stringHelper";
import ContentModal from "./ContentModal";

export default function ArticleRow({ article, setLoadingArticles }) {
  const { id, title, content, publication_date, author, category } = article;
  const [isEditable, setEditable] = useState(false);
  const [dataArticle, setDataArticle] = useState({
    title,
    content,
    author,
    category,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    setDataArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    ApiHelper(`articles/${id}`, "put", dataArticle)
      .then(() => {
        setLoadingArticles((prev) => !prev);
        setEditable(false);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  const handleDelete = () => {
    ApiHelper(`articles/${id}`, "delete", {}, "")
      .then(() => {
        setLoadingArticles((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataArticle.title}
            name="title"
            onChange={handleChange}
          />
        ) : (
          title
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Button onClick={onOpen} colorScheme="blue">
            Editer
          </Button>
        ) : (
          stringHelper.stringLimiter(content, 45)
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataArticle.author}
            name="author"
            onChange={handleChange}
          />
        ) : (
          author
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataArticle.category}
            name="category"
            onChange={handleChange}
          />
        ) : (
          category
        )}
      </Td>
      <Td>{publication_date.split("T")[0]}</Td>
      <Td>
        <HStack spacing={6}>
          {isEditable ? (
            <Icon onClick={onSubmit} as={FiCheckSquare} />
          ) : (
            <Icon onClick={() => setEditable(true)} as={FiEdit} />
          )}
          <Icon onClick={() => handleDelete()} as={FiDelete} />
        </HStack>
      </Td>
      <ContentModal
        isOpen={isOpen}
        onClose={onClose}
        setLoadingArticles={setLoadingArticles}
        articleId={id}
      />
    </Tr>
  );
}

ArticleRow.propTypes = {
  article: PropTypes.shape(ArticlePropTypes).isRequired,
  setLoadingArticles: PropTypes.func.isRequired,
};
