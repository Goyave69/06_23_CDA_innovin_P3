/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CardHome({
  props,
  showButton = true,
  showDescription = true,
  imgDif = false,
}) {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "30vw" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1}>
          <Image
            className={
              imgDif
                ? `w-48 h-40 object-contain mt-3 mx-auto`
                : ` object-cover mt-3 mx-auto`
            }
            boxSize="100%"
            src={props.image}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {props.name}
          </Heading>
          <Text
            textAlign={"center"}
            pt={6}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {showDescription && props.description}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {showButton && (
              <NavLink className="flex" to={`/wine/${props.id}`}>
                <button
                  type="button"
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mx-auto mb-3"
                >
                  Voir plus
                </button>
              </NavLink>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
