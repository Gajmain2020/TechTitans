import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Post from "./Post/";
import Post from "../Post/Post";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Timeline from "../Timeline/Timeline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MessageIcon from "@mui/icons-material/Message";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Button } from "@mui/base";

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const user =
    localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="mt-2">
      <Toolbar />
      <Divider />
      <List>
        <NavLink to={"/content/" + `${user.id}`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
        {/* <NavLink to="/search">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText>Explore</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink> */}
        <ListItem disablePadding>
          <NavLink to="/notifications">
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText>Notifications</ListItemText>
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <Link to={"/activity/" + `${user.id}`}>
            <ListItemButton>
              <ListItemIcon>
                <LibraryAddCheckIcon />
              </ListItemIcon>
              <ListItemText>Activity</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={"/bookmarks/" + `${user.id}`}>
            <ListItemButton>
              <ListItemIcon>
                <BookmarksIcon />
              </ListItemIcon>
              <ListItemText>Bookmarks</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        {/* <Link to="/message">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText>Messages</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link> */}

        <Link to={"/createpost/" + `${user.id}`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText>Create Post</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("data");
    navigate("/");
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100%)` },
          // ml: { sm: `${drawerWidth}px` },
          // mr: { sm: `${drawerWidth}px` },
          display: "flex",
          justifyContent: "space-around",
          height: "75px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="flex gap-4">
              <Typography variant="h6" noWrap component="div">
                {/* <p> Borrow Ease </p>  */}
                <p className="font-bold">Credit Connect</p>
              </Typography>

              <Link to='/complaint' >
              <Button >
                Complaint
              </Button>
              </Link>
              <Button>
                About Us
              </Button>
              
            </div>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar>{user.name[0].toUpperCase()}</Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to={"/profile/" + `${user.id}`}>
                <MenuItem onClick={handleClose}>
                <AccountCircleIcon />
                  Profile
                </MenuItem>
              </Link>
              <MenuItem onClick={handleLogout}>
                <LogoutIcon />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div className="z-10">
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            display: "flex",
            flexShrink: { sm: 0 },
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
    </Box>
  );
}

export default ResponsiveDrawer;

function SideBarforSearch(props) {
  const user = localStorage.getItem("data") && localStorage.getItem("data");

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="mt-2">
      <Toolbar />
      <Divider />
      <List>
        <NavLink to={"/content/" + `${user.id}`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/search">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText>Explore</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <ListItem disablePadding>
          <NavLink to="/notifications">
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText>Notifications</ListItemText>
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <Link to={"/activity/" + `${user.id}`}>
            <ListItemButton>
              <ListItemIcon>
                <LibraryAddCheckIcon />
              </ListItemIcon>
              <ListItemText>Activity</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={"/bookmarks/" + `${user.id}`}>
            <ListItemButton>
              <ListItemIcon>
                <BookmarksIcon />
              </ListItemIcon>
              <ListItemText>Bookmarks</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        {/* <Link to="/message">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText>Messages</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link> */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
        <Link to={"/createpost/" + `${user.id}`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText>Create Post</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState("");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100%)` },
          // ml: { sm: `${drawerWidth}px` },
          // mr: { sm: `${drawerWidth}px` },
          display: "flex",
          justifyContent: "space-around",
          height: "75px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div classNameName="flex gap-4">
              <Typography variant="h6" noWrap component="div">
                {/* <p> Borrow Ease </p>  */}
                <p classNameName="font-bold">Credit Connect</p>
              </Typography>
            </div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar {...stringAvatar("Gitesh Sarvaiya")} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/profile/Gitesh Sarvaiya">
                <MenuItem onClick={handleClose}>
                  <AccountCircleIcon />
                  Profile
                </MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>
                <LogoutIcon />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div classNameName="z-10">
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            display: "flex",
            flexShrink: { sm: 0 },
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
    </Box>
  );
}

export { SideBarforSearch };
