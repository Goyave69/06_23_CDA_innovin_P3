import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { AiFillSignal } from "react-icons/ai";
import { FaWineBottle, FaUserFriends } from "react-icons/fa";
import NavItem from "./NavItem";

const items = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: AiFillSignal,
  },
  {
    title: "Vin",
    path: "/admin/wine",
    icon: FaWineBottle,
  },
  {
    title: "Utilisateur",
    path: "/admin/user",
    icon: FaUserFriends,
  },
];

export default function SidebarContent({ onClose, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {items.map((link) => (
        <NavItem key={link.title} path={link.path} icon={link.icon}>
          {link.title}
        </NavItem>
      ))}
    </Box>
  );
}

SidebarContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};
