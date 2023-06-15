import PropTypes from "prop-types";
import { Box, ButtonBase } from "@mui/material";

export default function SideBarItem(props) {
  const { icon, path, title } = props;

  const linkProps = path ? { href: path } : {};

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
          backgroundColor: "background.secondary",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              color: "primary.main",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: "text.primary",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  );
}

SideBarItem.defaultProps = {
  icon: PropTypes.node,
  path: PropTypes.string,
};

SideBarItem.propTypes = {
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
