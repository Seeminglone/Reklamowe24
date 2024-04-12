import React from "react";
import styled from "styled-components";
import MenuIItemImg from "../../../assets/menu-product.png";

const SectionNews = styled.div`
  display: block;

  & > span {
    background-color: #ffba00;
    white-space: nowrap;
    border-radius: 50px;
    color: #fff;
    font-size: 14px;
    height: 25px;
    padding-bottom: 0.25rem !important;
    padding-top: 0.25rem !important;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
`;

const SectionTitle = styled.div`
  display: block;
  color: #0a94d6;
  font-size: 22px;
`;

const SectionText = styled.p`
  display: block;
  font-size: 12px;
  margin-bottom: 1rem;
  margin-top: 0;
  max-width: 260px;
`;

const SectionButtonContainer = styled.div``;

const ButtonGiftBox = styled.button`
  padding: 0.375rem 20px;
  font-size: 1rem;
  background-color: #132233;
  outline: none;
  border: none;
  color: white;
  border-radius: 50px;
  cursor: pointer;
`;

const MenuItemImage = styled.img`
  position: absolute;
  top: 200px;
  left: 190px;
  z-index: -1;
`;

const SubmenuContent = () => {
  return (
    <>
      <SectionNews>
        <span>Nowość</span>
      </SectionNews>
      <SectionTitle>Stwórz własny zestaw</SectionTitle>
      <SectionText>
        Stwórz własny giftbox i zaskocz swoich klientów lub pracowników!
        Komponując box pamiętaj, by dopasować produkty do upodobań danej grupy
        odbiorców. Całość zapakujemy w tekturowe pudełko wyścielane naturalnym
        wypełniaczem.
      </SectionText>
      <SectionButtonContainer>
        <ButtonGiftBox>Stwórz giftbox</ButtonGiftBox>
      </SectionButtonContainer>
      <MenuItemImage src={MenuIItemImg} alt="Menu Item"></MenuItemImage>
    </>
  );
};

export default SubmenuContent;
