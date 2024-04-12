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

export default function OfertaTematyczna() {
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
        <MenuItem onClick={handleClose}>Nasze Bestsellery</MenuItem>
        <MenuItem onClick={handleClose}>Gadżety markowe</MenuItem>
        <MenuItem onClick={handleClose}>Odzież reklamowa</MenuItem>
        <MenuItem onClick={handleClose}>Nowości</MenuItem>
        <MenuItem onClick={handleClose}>Gadżety reklamowe ekologiczne</MenuItem>
        <MenuItem onClick={handleClose}>Gadżety reklamowe wyborcze</MenuItem>
        <MenuItem onClick={handleClose}>
          Gadżety reklamowe dla biur nieruchomości
        </MenuItem>
        <hr></hr>
        <MenuItem onClick={handleClose}>Inspiracje</MenuItem>
        <MenuItem onClick={handleClose}>Gadżety do 1 zł</MenuItem>
      </Menu>
    </div>
  );
}
