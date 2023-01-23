import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Shop2Icon from "@mui/icons-material/Shop2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SpeedIcon from "@mui/icons-material/Speed";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "./Context/AuthContext";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
} from "mdb-react-ui-kit";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { logout, user } = React.useContext(authContext);

  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#64ffda"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "block" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#64ffda",
              textDecoration: "none",
            }}
          >
            <img
              onClick={() => navigate("/")}
              src="https://capricathemes.com/opencart/OPC10/OPC100231/image/catalog/logo.png"
              alt="BookArt"
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-evenly",
              },
            }}
          >
            <Typography
              sx={{
                color: "black",
              }}
            >
              <Link
                style={{
                  color: "black",
                }}
              >
                <MDBIcon far icon="heart" size="lg" />
              </Link>
            </Typography>
            <Typography
              sx={{ color: "black" }}
              onClick={() => navigate("/cart")}
            >
              <Link style={{ color: "black" }}>
                <MDBIcon fas icon="shopping-basket" size="lg" />
              </Link>
            </Typography>
            <Typography sx={{ color: "black" }}>
              <MDBDropdown group className="shadow-0">
                <MDBDropdownToggle color="light">
                  <MDBIcon far icon="user" size="lg" />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {/* {pages.map((page) => (
                        <Button
                          key={page}
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: "white", display: "block" }}
                        >
                          {page}
                        </Button>
                      ))} */}

                    {user === "admin@admin.com" ? (
                      <MDBDropdownItem link>
                        <>
                          <Button
                            onClick={() => navigate("/products")}
                            sx={{ my: 2, color: "black", display: "block" }}
                          >
                            Products
                          </Button>
                          <Button
                            onClick={() => navigate("/admin")}
                            sx={{ my: 2, color: "black", display: "block" }}
                          >
                            Admin Page
                          </Button>

                          <Button
                            onClick={() => logout()}
                            sx={{ my: 2, color: "black", display: "block" }}
                          >
                            Logout
                          </Button>
                        </>
                      </MDBDropdownItem>
                    ) : null}

                    {user ? (
                      <MDBDropdownItem link>
                        <>
                          <Button
                            onClick={() => logout()}
                            sx={{ my: 2, color: "black", display: "block" }}
                          >
                            Logout
                          </Button>
                        </>
                      </MDBDropdownItem>
                    ) : (
                      <MDBDropdownItem link>
                        <>
                          <Button
                            onClick={() => navigate("/login")}
                            sx={{ my: 2, color: "black", display: "block" }}
                          >
                            Login
                          </Button>
                          <Button
                            onClick={() => navigate("/register")}
                            sx={{ my: 2, color: "black", display: "block" }}
                          >
                            Register
                          </Button>
                        </>
                      </MDBDropdownItem>
                    )}
                  </Box>
                </MDBDropdownMenu>
              </MDBDropdown>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
