import React from "react";
import { Flex, Icon, Link } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function NavItem({ path, icon, children, ...rest }) {
  return (
    <Link
      href={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};
