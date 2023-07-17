import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";

export default function ContentModal({
  isOpen,
  onClose,
  setLoadingArticles,
  articleId,
}) {
  const [dataArticle, setDataArticle] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  useEffect(() => {
    ApiHelper(`articles/${articleId}`, "get", dataArticle).then((res) => {
      setDataArticle(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setDataArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    ApiHelper(`articles/${articleId}`, "put", {
      ...dataArticle,
      publication_date: dataArticle.publication_date.split("T")[0],
    })
      .then(() => {
        setLoadingArticles((prev) => !prev);
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
        <ModalHeader>Contenu de l'article</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          <FormControl mt="4">
            <FormLabel>Contenu</FormLabel>
            <Textarea
              value={dataArticle.content}
              name="content"
              placeholder="Bienvenue dans ce top 5 sur les meilleurs vins rouges et on commence tout de suite par ..."
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

ContentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setLoadingArticles: PropTypes.func.isRequired,
  articleId: PropTypes.number.isRequired,
};
