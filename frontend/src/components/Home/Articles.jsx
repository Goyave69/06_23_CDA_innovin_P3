/* eslint-disable no-param-reassign */
import { useEffect, useState } from "react";
import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import ApiHelper from "../../services/apiHelper";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const articlePerPage = 2;
  const [selectedPage, setSelectedPage] = useState(0);

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    ApiHelper("articles", "get").then((res) => {
      setArticles(res.data);
    });
  }, [selectedPage]);

  const createPageNumbers = () => {
    const numbersLength = articles.length / articlePerPage;
    const numbersArray = [];
    for (let i = 0; i < numbersLength; i += 1) {
      numbersArray.push(
        <Button
          key={i}
          fontSize={25}
          variant="link"
          textDecoration={selectedPage === i ? "underline" : "none"}
          fontWeight={selectedPage === i ? "bold" : "none"}
          onClick={() => {
            setSelectedPage(i);
          }}
        >
          {i + 1}
        </Button>
      );
    }
    return numbersArray;
  };

  return (
    <Flex direction="column">
      <Text fontSize="4xl" textAlign="center" my={35}>
        Actualités
      </Text>
      <HStack justifyContent="center" my={5}>
        {createPageNumbers()}
      </HStack>
      <Flex wrap="wrap" justifyContent="center" alignItems="center" gap={5}>
        {articles
          .slice(
            selectedPage * articlePerPage,
            (selectedPage + 1) * articlePerPage
          )
          .map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
      </Flex>
      <HStack justifyContent="center" my={5}>
        {createPageNumbers()}
      </HStack>
    </Flex>
  );
}
