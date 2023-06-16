import PropTypes from "prop-types";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";

export default function AccountPopover(props) {
  const { anchorEl, onClose, open } = props;

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: 200 } } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.primary" variant="body2">
          Mathieu Lec
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
}

AccountPopover.defaultProps = {
  anchorEl: PropTypes.oneOfType([
    PropTypes.instanceOf(Element),
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onClose: PropTypes.func,
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.oneOfType([
    PropTypes.instanceOf(Element),
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
