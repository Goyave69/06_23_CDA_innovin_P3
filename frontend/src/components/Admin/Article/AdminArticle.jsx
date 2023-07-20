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
import TableArticle from "./TableArticle";
import ArticleModal from "./ArticleModal";

export default function AdminArticle() {
  const [articles, setArticles] = React.useState([]);
  const [loadingArticles, setLoadingArticles] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    ApiHelper("articles", "get")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [loadingArticles]);

  return (
    <Container maxW="container.xl" mx="16">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <HStack p="4">
          <Link href="/admin">Dashboard</Link>
          <p style={{ padding: "10px" }}>/</p>
          <Link href="/admin/article">Article</Link>
        </HStack>
        <Spacer />
        <Button onClick={onOpen} colorScheme="blue" p="4">
          Nouvel article
        </Button>
      </Flex>
      <TableArticle
        articles={articles}
        setLoadingArticles={setLoadingArticles}
      />
      <ArticleModal
        isOpen={isOpen}
        onClose={onClose}
        setLoadingArticles={setLoadingArticles}
      />
    </Container>
  );
}
