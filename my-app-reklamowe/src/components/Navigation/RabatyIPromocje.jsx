import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
`;

export default function RabatyIPromocje() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (!anchorEl?.contains(event.target)) {
        setAnchorEl(null);
      }
    };

    if (open) {
      document.addEventListener("click", handleCloseMenu);
    } else {
      document.removeEventListener("click", handleCloseMenu);
    }

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, [open, anchorEl]);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        Oferta tematyczna <ArrowDropDownIcon sx={{ color: "black" }} />
      </StyledButton>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionProps={{ timeout: 0 }}
        sx={{ marginTop: "1rem", position:'static ! important' }}
      >
        <MenuItem onClick={handleClose}>Produkty w niższych cenach</MenuItem>
        <MenuItem onClick={handleClose}>Promocja miesiąca</MenuItem>
        <MenuItem onClick={handleClose}>Prezent dla pracownika</MenuItem>
        <MenuItem onClick={handleClose}>Prezenty dla firm</MenuItem>
        <MenuItem onClick={handleClose}>Giftbox</MenuItem>
        <hr></hr>
        <MenuItem onClick={handleClose}>Archiwalne promocje</MenuItem>
      </Menu>
    </div>
  );
}
