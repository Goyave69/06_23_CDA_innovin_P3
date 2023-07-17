import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";

export default function ArticleModal({ isOpen, onClose, setLoadingArticles }) {
  const [dataArticle, setDataArticle] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  const handleChange = (e) => {
    setDataArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    ApiHelper("articles", "post", dataArticle)
      .then(() => {
        setLoadingArticles((prev) => !prev);
        setDataArticle({});
        onClose();
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  return (
    <Modal isOpen={isOpen} size="lg" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Créer un article</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          <HStack spacing={4} mt="2">
            <FormControl>
              <FormLabel>Titre</FormLabel>
              <Input
                value={dataArticle.title}
                name="title"
                placeholder="Top 5 des vins rouges"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Catégorie</FormLabel>
              <Input
                value={dataArticle.category}
                name="category"
                placeholder="Top"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <FormControl mt="4">
            <FormLabel>Contenu</FormLabel>
            <Textarea
              value={dataArticle.content}
              name="content"
              placeholder="Bienvenue dans ce top 5 sur les meilleurs vins rouges et on commence tout de suite par ..."
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt="4">
            <FormLabel>Auteur</FormLabel>
            <Input
              value={dataArticle.author}
              name="author"
              placeholder="Martin Raisin"
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr="3" onClick={onSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

ArticleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setLoadingArticles: PropTypes.func.isRequired,
};
