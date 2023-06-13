import PropTypes from "prop-types";
import { Box, ButtonBase } from "@mui/material";

export default function SideBarItem(props) {
  const { active = true, disabled, icon, path, title } = props;

  const linkProps = path
    ? {
        component: "a",
        href: path,
        target: "_blank",
      }
    : {
        href: path,
      };

  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          pl: "16px",
          pr: "16px",
          py: "6px",
          textAlign: "left",
          width: "100%",
          ...(active && {
            backgroundColor: "background.secondary",
          }),
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
        /* eslint-disable react/jsx-props-no-spreading */
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              color: "neutral.400",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
              ...(active && {
                color: "primary.main",
              }),
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: "neutral.400",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
            ...(active && {
              color: "text.primary",
            }),
            ...(disabled && {
              color: "neutral.500",
            }),
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  );
}

SideBarItem.defaultProps = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
};

SideBarItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
