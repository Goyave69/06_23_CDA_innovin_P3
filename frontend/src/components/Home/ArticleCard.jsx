import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import stringHelper from "../../services/stringHelper";

export default function ArticleCard({ article }) {
  return (
    <Card width={500} height={280} style={{ borderTop: "#252 5px solid" }}>
      <CardHeader>
        <HStack justifyContent="space-between" alignItems="flex-start">
          <Text fontSize={18}>
            {article.title}{" "}
            <span style={{ fontStyle: "italic", color: "#666" }}>
              by {article.author}
            </span>
          </Text>
          <Badge colorScheme="green">{article.category}</Badge>
        </HStack>
      </CardHeader>
      <CardBody>{stringHelper.stringLimiter(article.content, 100)}</CardBody>
      <CardFooter justifyContent="center">
        <NavLink to={`/article/${article.id}`}>
          <Button colorScheme="green">Lire l'article</Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
