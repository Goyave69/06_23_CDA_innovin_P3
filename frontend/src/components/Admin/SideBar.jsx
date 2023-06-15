import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LiquorIcon from "@mui/icons-material/Liquor";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import SideBarItem from "./SideBarItem";

const items = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <SignalCellularAltIcon />,
  },
  {
    title: "Vin",
    path: "/admin/wine",
    icon: <LiquorIcon />,
  },
  {
    title: "Fiche de dégustation",
    path: "/admin/tasting_sheet",
    icon: <ArticleIcon />,
  },
  {
    title: "Utilisateur",
    path: "/admin/user",
    icon: <PeopleIcon />,
  },
];

export default function SideBar(props) {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          p: 3,
          backgroundColor: "background.primary",
        }}
      >
        <Box
          href="/"
          sx={{
            display: "inline-flex",
            height: 32,
            width: 32,
          }}
        >
          Logo
        </Box>
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "background.secondary",
            borderRadius: 1,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            p: "12px",
          }}
        >
          <Typography color="text.primary" variant="subtitle1">
            Inno'vin
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "neutral.700" }} />
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3,
          backgroundColor: "background.primary",
        }}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
          }}
        >
          {items.map((item) => {
            return (
              <SideBarItem
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
              />
            );
          })}
        </Stack>
      </Box>
      <Divider sx={{ borderColor: "neutral.700" }} />
      <Box
        sx={{
          px: 2,
          py: 3,
          backgroundColor: "background.primary",
        }}
      >
        <Typography color="neutral.100" variant="subtitle2">
          In Construction
        </Typography>
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}

SideBar.defaultProps = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

SideBar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
