/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-curly-brace-presence */
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
} from "@chakra-ui/react";
import sommeliers from "../components/Home/TeamData";
import FormSign from "../components/Login/FormSign";

export default function Login() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 6 }}
        px={{ base: 10, sm: 20, lg: 3 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Rejoins Notre Fabuleuse équipe{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Devenons une famille
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {sommeliers.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  src={avatar.image}
                  className="w-20 h-20 rounded-full"
                  bgGradient="linear(to-bl, red.400,pink.400)"
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              TOI
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Rejoins notre équipe{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Rejoignez-nous pour rencontrer des passionnés de vins et partager
              ensemble notre amour pour cet art divin de la dégustation
            </Text>
          </Stack>
          <FormSign />
          form
        </Stack>
      </Container>
    </Box>
  );
}
