import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import links from "./menuLinks";
import SubmenuContent from "./SubMenu";
import DoBiura from "./DoBiura/index";

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
`;
const SubMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 200px;
  padding: 0 18px;
  box-sizing: border-box;
`;
const SubMenuContextContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 300px;
  padding: 0 18px;
  margin-top: 0.25rem;
  box-sizing: border-box;
  overflow: visible; /* Allow overflow */
  z-index: 1; /* Ensure content inside is above image */
`;

const Link = styled.div`
  align-items: center;
  color: ${({ active }) => (active ? "#888" : "#000")};
  display: inline-flex;
  flex-wrap: nowrap;
  font-size: 14px;
  justify-content: space-between;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  white-space: nowrap;
  cursor: pointer;

  & > svg {
    transition: transform 0.3s; /* Move the transition property to default state */
    transform: ${({ active }) => (active ? "translateX(3px)" : "none")};
  }

  &:hover {
    color: #888;
    font-size: 14px;
    text-decoration: underline;

    & > svg {
      transform: translateX(3px);
    }
  }
`;

export default function OfertaGadzetow() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleClick = (event) => {
    setOpen((prevOpen) => !prevOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuLinks = (event, menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setSelectedMenuItem(null);
  };

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSelectedMenuItem(null);
        setOpen(false);
        setAnchorEl(null);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleCloseMenu);
    } else {
      document.removeEventListener("mousedown", handleCloseMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseMenu);
    };
  }, [open]);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        Oferta gadżetów <ArrowDropDownIcon sx={{ color: "black" }} />
      </StyledButton>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ marginTop: "1rem", position: "static ! important" }}
        TransitionProps={{ timeout: 0 }}
        ref={menuRef}
      >
        <Container>
          <SubMenuContainer>
            {links.map((link, index) => (
              <Link
                key={index}
                onClick={(event) => handleMenuLinks(event, link.text)}
                active={selectedMenuItem === link.text}
              >
                {link.text}{" "}
                <ChevronRightIcon sx={{ color: "black", fontSize: "18px" }} />
              </Link>
            ))}
          </SubMenuContainer>
          <SubMenuContextContainer>
            {!selectedMenuItem && <SubmenuContent />}
            {selectedMenuItem && (
              <div>{selectedMenuItem === "Do biura" && <DoBiura />}</div>
            )}
          </SubMenuContextContainer>
        </Container>
      </Menu>
    </div>
  );
}
