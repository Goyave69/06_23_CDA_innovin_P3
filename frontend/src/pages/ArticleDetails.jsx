import { Badge, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiHelper from "../services/apiHelper";
import stringHelper from "../services/stringHelper";

export default function ArticleDetails() {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    ApiHelper(`articles/${id}`, "get").then((res) => {
      setArticle(res.data);
    });
  }, [id]);

  return (
    <Flex justifyContent="center" alignItems="center" width="100%">
      {Object.keys(article).length > 0 && (
        <Flex
          width="80%"
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap={10}
          my={50}
        >
          <Flex
            width="80%"
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap={10}
          >
            <Text alignSelf="flex-start">
              Publié le {stringHelper.dateFormatter(article.publication_date)}
            </Text>
            <Text fontSize={40}>{article.title}</Text>
            <Badge fontSize={16} colorScheme="green">
              {article.category}
            </Badge>
            <Text textAlign="justify">{article.content}</Text>
            <Text
              alignSelf="flex-end"
              fontSize={20}
              fontStyle="italic"
              color="#666"
            >
              by {article.author}
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
