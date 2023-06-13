import PropTypes from "prop-types";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Badge,
  Box,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import usePopover from "../../hooks/usePopover";
import AccountPopover from "./AccountPopover";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export default function NavTop(props) {
  const { onNavOpen, toggleDarkMode } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const accountPopover = usePopover();

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          position: "sticky",
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <MenuIcon />
              </IconButton>
            )}
            <Tooltip title="Search">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <FormControlLabel
              control={
                <Switch
                  onClick={toggleDarkMode}
                  name="loading"
                  color="primary"
                  icon={
                    <WbSunnyIcon fontSize="medium" sx={{ color: "black" }} />
                  }
                  checkedIcon={
                    <ModeNightIcon fontSize="medium" sx={{ color: "black" }} />
                  }
                />
              }
            />
            <Tooltip title="Notifications">
              <IconButton>
                <Badge badgeContent={4} color="success" variant="dot">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: "pointer",
                height: 40,
                width: 40,
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
}

NavTop.defaultProps = {
  onNavOpen: PropTypes.func,
  toggleDarkMode: PropTypes.func,
};

NavTop.propTypes = {
  onNavOpen: PropTypes.func,
  toggleDarkMode: PropTypes.func,
};
