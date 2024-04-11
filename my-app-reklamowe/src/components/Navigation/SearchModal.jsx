import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  font-size: inherit;
  padding: 0.5rem 1rem;
  line-height: 25.5px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
`;

const ButtonSearch = styled.button`
  border: 1px solid #dadada;
  border-radius: 50px;
  display: flex;
  padding: 6px 4px 6px 20px;
  transition: box-shadow 0.3s linear;
  width: 100%;
  cursor: pointer;
  max-width: 15rem;
  background: none;
`;

const ButtonSearchText = styled.div`
  align-items: center;
  align-self: stretch;
  color: #878787;
  display: flex;
  flex-grow: 2;
  width: 100%;
  justify-content: start;
  margin-right: 1rem;
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

const style = {
  position: "absolute",
  top: "12%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const handleClose = () => setOpen(false);
  const handleModalOpen = () => {
    setOpen(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
  };

  return (
    <div style={{ maxWidth: "15rem", width: "100%" }}>
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
          <InputSearch ref={inputRef} placeholder="Szukaj produktu" />
        </Box>
      </Modal>
    </div>
  );
}
