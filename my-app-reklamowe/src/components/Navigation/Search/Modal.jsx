import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PopularLinks from "./Links";
import ModalNavigation from "./ModalNavigation";
import theme from "../../../Styles/theme";

const ButtonSearch = styled.a`
  border: 1px solid #dadada;
  border-radius: 50px;
  display: flex;
  padding: 6px 4px 6px 20px;
  transition: box-shadow 0.3s linear;
  width: 100%;
  cursor: pointer;
  max-width: 15rem;
  background: none;

  &:focus {
    outline: none;
  }
  @media only screen and (max-width: ${theme.breakpointsCustom.cs}px) {
    max-width: none;
    width: 100%;
  }
`;
const ButtonSearchText = styled.div`
  align-items: center;
  align-self: stretch;
  color: #878787;
  display: flex;
  flex-grow: 2;
  width: 100%;
  justify-content: start;
  margin-right: 3rem;
  font-size: 16px;
`;

const ButtonSearchIcon = styled.div`
  background-color: #132233;
  border: 0;
  border-radius: 50%;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxContainer = styled.div`
  padding: 20px;
  @media only screen and (max-width: ${theme.breakpointsCustom.cs}px) {
    padding: 10px;
  }
`;

const ModalContainer = styled.div`
  max-width: "15rem";
  width: "100%";

  @media only screen and (max-width: ${theme.breakpointsCustom.cs}px) {
    max-width: none;
    width: 100%;
  }
`;

const style = {
  position: "absolute",
  top: "32%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  minHeight: 520,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 4,
  padding: 0,
  outline: "none",
  "@media only screen and (max-width: 920px)": {
    width: 380,
    top: "50%",
  },
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleModalOpen = () => setOpen(true);

  return (
    <ModalContainer>
      <ButtonSearch onClick={handleModalOpen}>
        <ButtonSearchText>Szukaj produktu</ButtonSearchText>
        <ButtonSearchIcon>
          <SearchIcon sx={{ color: "white" }} />
        </ButtonSearchIcon>
      </ButtonSearch>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BoxContainer>
            <PopularLinks open={open} handleClose={handleClose} />
          </BoxContainer>
          <ModalNavigation />
        </Box>
      </Modal>
    </ModalContainer>
  );
}
