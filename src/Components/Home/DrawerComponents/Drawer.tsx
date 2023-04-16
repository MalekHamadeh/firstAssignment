import React, { useContext } from "react";

import { styled, Theme, CSSObject } from "@mui/material/styles";

import {
  Box,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import smallLogo from "../../../Images/Logo/SmallLogo.svg";
import TeamIcon from "../../../Images/Icons/DrawerIcons/teamIcon.svg";
import MenuIcon from "../../../Images/Icons/DrawerIcons/menuIcon.svg";
import InfoIcon from "../../../Images/Icons/DrawerIcons/infoIcon.svg";
import LogOutIcon from "../../../Images/Icons/DrawerIcons/logoutIcon.svg";

import { DrawerContextProps } from "../../../Context/DrawerContext";
import DrawerContext, { subItems } from "../../../Context/DrawerContext";

import NeededDrawerList from "./NeededDraweList";

const drawerWidth = 240;

interface OpenProps {
  open?: boolean;
}
interface LogoProps {
  logo: string;
}
interface smallestItems {
  iconColor: string;
  text: string;
}

interface groupedItems {
  [title: string]: subItems[];
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#31394E",
  color: "#fff",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "#31394E",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  background: "#31394E",
  "& .MuiIconButton-root": {
    color: "#fff",
  },
}));

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledDivider = styled(Divider)`
  background-color: #fff;
`;

const StyledLogo = styled(Icon)`
  background-image: url(${smallLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 24px;
  height: 24px;
  margin-left: 0.5rem;
`;

const StyledListItem = styled(ListItem)`
  display: block;
`;

const StyledListItemButton = styled(ListItemButton)<OpenProps>`
  minHeight: 48,
  justifyContent: ${({ open }) => (open ? "initial" : "center")},

`;

const StyledListItemIcon = styled(ListItemIcon)<OpenProps>`
  minWidth: 0,
  mr: ${({ open }) => (open ? 3 : "auto")},
  color: "#fff",
  justifyContent: "center",
`;

const StyledListItemText = styled(ListItemText)<OpenProps>`
  & .MuiListItemText-primary {
    font-family: "Rubik", sans-serif;
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
`;

const StyledIconButton = styled(IconButton)`
  color: "#fff";
`;
const StyledListItemFooter = styled(ListItem)`
  display: "flex";
  justify-content: "space-between";
  align-items: "center";
  background: "black";
`;
const VerticalList = styled(List)`
  display: flex;
`;

const VerticalListItem = styled(ListItem)<OpenProps>`
  flexDirection: ${({ open }) => (open ? "row" : "column")},
  justifContent: ${({ open }) => (open ? "space-between" : "intial")},
`;

export default function Drawer() {
  const { mainItems, subItems, handleChanges }: DrawerContextProps =
    useContext(DrawerContext);

  const [open, setOpen] = React.useState(false);
  const [nestedIsOpen, setNestedIsOpen] = React.useState(false);

  const groupedItems = subItems.reduce<groupedItems>((acc, item) => {
    const { title } = item;
    if (title) {
      acc[title] = [...(acc[title] || []), item];
    }
    return acc;
  }, {});

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleNested = () => {
    setNestedIsOpen(!nestedIsOpen);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <CssBaseline enableColorScheme />
      <StyledDrawer
        variant='permanent'
        open={open}
        sx={{ display: "flex", height: "100vh" }}
      >
        <DrawerHeader>
          {open && <StyledLogo />}
          <StyledIconButton onClick={handleDrawer}>
            <img src={MenuIcon} alt='icon' />
          </StyledIconButton>
        </DrawerHeader>

        <List>
          {mainItems.map(({ icon, title, component }, index) => (
            <StyledListItem
              disablePadding
              key={index}
              onClick={() => handleChanges(title, component)}
            >
              <StyledListItemButton open={open}>
                <StyledListItemIcon open={open}>
                  {icon && <img src={icon} alt='icon' />}
                </StyledListItemIcon>
                <StyledListItemText primary={title} open={open} />
              </StyledListItemButton>
            </StyledListItem>
          ))}
        </List>
        <StyledDivider />
        <List>
          <StyledListItem disablePadding>
            <StyledListItemButton open={open} onClick={handleNested}>
              <StyledListItemIcon open={open}>
                <img src={TeamIcon} alt='icon' />
              </StyledListItemIcon>
              <StyledListItemText primary='Teams' open={open} />
              {open ? nestedIsOpen ? <ExpandLess /> : <ExpandMore /> : null}
            </StyledListItemButton>
          </StyledListItem>
          {open &&
            nestedIsOpen &&
            Object.entries(groupedItems).map(
              ([name, items]: [string, subItems[]], index) => {
                return (
                  <>
                    <List dense key={index}>
                      <StyledListItem>
                        <StyledListItemText primary={name} open={open} />
                      </StyledListItem>
                    </List>

                    {items.map((subitem, index) => {
                      console.log(items);
                      return (
                        <StyledListItem disablePadding key={index}>
                          <NeededDrawerList items={subitem} index={index} />
                        </StyledListItem>
                      );
                    })}
                  </>
                );
              }
            )}

          <StyledListItemFooter disablePadding>
            <VerticalList disablePadding>
              <VerticalListItem open={open}>
                <StyledIconButton>
                  <img src={InfoIcon} alt='icon' />
                </StyledIconButton>
                <StyledIconButton>
                  <img src={InfoIcon} alt='icon' />
                </StyledIconButton>
                <StyledIconButton>
                  <img src={LogOutIcon} alt='icon' />
                </StyledIconButton>
              </VerticalListItem>
            </VerticalList>
          </StyledListItemFooter>
        </List>
      </StyledDrawer>
    </Box>
  );
}
