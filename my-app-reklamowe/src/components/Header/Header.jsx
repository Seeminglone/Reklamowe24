import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import LogoImg from "../../assets/logo.png";
import styled from "styled-components";
import theme from "../../Styles/theme";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import KeyLockPng from "../../assets/keylock.png";
import BasketPng from "../../assets/basket.png";

const drawerWidth = 240;
const navItems = [
  "Strona główna",
  "Oferta gadżetów",
  "Oferta tematyczna",
  "Rabaty i promocje",
];

const StyledAppBar = styled(AppBar)`
  background-color: white !important;
  box-shadow: none !important;
  position: sticky !important;
  border-bottom: 1px solid #eeeeee !important;
  padding-bottom: 0.5rem !important;
  top: 0 !important;
  padding-right: 0 !important;
  max-width: 1750px !important;
  margin: auto !important;
  padding-top: 0.5rem !important;
`;
const StyledImg = styled.img`
  width: 175px;
  aspect-ratio: auto 175 / 55;
  height: 55px;
  @media only screen and (max-width: ${theme.breakpointsCustom.cs}px) {
    width: 107px;
    aspect-ratio: auto 107 / 36;
    height: 36px;
    margin-top: 7px;
  }
`;

const StyledToolBar = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  padding: 0rem 1.5rem !important;
`;

const HeaderContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
const ContactMail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  @media only screen and (max-width: ${theme.breakpointsCustom.max}px) {
    display: none;
  }
`;
const StyledButton = styled.button`
  background-color: #132233;
  border-color: #132233;
  color: #fff;
  font-size: 1rem;
  white-space: nowrap;
  border-radius: 50px;
  padding: 0.375rem 16px;
  padding-bottom: 12px;
  padding-top: 12px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #132233;
  transition: all 0.2s linear;

  &:hover {
    background-color: #000;
    border-color: #000;
  }
`;
const ContactPhone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  @media only screen and (max-width: ${theme.breakpointsCustom.max}px) {
    display: none;
  }
`;
const UserPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: auto !important;
  gap: 1rem;
  @media only screen and (min-width: ${theme.breakpointsCustom.max}px) {
    display: none;
  }
`;

const Login = styled(Link)`
  cursor: pointer;
`;

const Cart = styled(Link)`
  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-directional: row;
  align-items: center;
`;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleClickShowEMail = () => {
    setShowEmail(true);
  };

  const handleClickShowPhone = () => {
    setShowPhone(true);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "start",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <StyledAppBar component="nav">
        <StyledToolBar>
          <LogoContainer>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ width: "2rem", height: "2rem" }} />
            </IconButton>
            <Link to="/">
              <StyledImg src={LogoImg}></StyledImg>
            </Link>
          </LogoContainer>
          <HeaderContact>
            <ContactMail>
              <EmailOutlinedIcon
                sx={{ color: "black", width: "37px", height: "29px" }}
              />
              {showEmail ? null : (
                <span style={{ color: "black" }}>biuro@</span>
              )}
              {showEmail ? (
                <a
                  href="mailto:biuro@reklamowe24.pl"
                  style={{ color: "#0a94d6" }}
                >
                  biuro@reklamowe24.pl
                </a>
              ) : null}
              {showEmail ? null : (
                <StyledButton onClick={handleClickShowEMail}>
                  Pokaż
                </StyledButton>
              )}
            </ContactMail>
            <ContactPhone>
              <LocalPhoneOutlinedIcon
                sx={{ color: "black", width: "37px", height: "29px" }}
              />
              {showPhone ? null : (
                <span style={{ color: "black" }}>tel. 42</span>
              )}
              {showPhone ? (
                <a
                  href="mailto:biuro@reklamowe24.pl"
                  style={{ color: "#0a94d6" }}
                >
                  tel. 42 630 55 15
                </a>
              ) : null}
              {showPhone ? null : (
                <StyledButton onClick={handleClickShowPhone}>
                  Pokaż
                </StyledButton>
              )}
            </ContactPhone>
            <UserPanel>
              <Login to="/login">
                <img src={KeyLockPng} alt="Login" />
              </Login>
              <Cart to="/cart">
                <img src={BasketPng} alt="Cart" />
              </Cart>
            </UserPanel>
          </HeaderContact>
        </StyledToolBar>
      </StyledAppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
