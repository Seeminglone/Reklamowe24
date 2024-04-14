import React from "react";
import SliderTop from "../components/Slider/SliderTop";
import styled from "styled-components";
import SliderCategories from "../components/CategoriesSlider/SliderCategories";
import BestCellerySlider from "../components/BestCellerySlider/SliderBestCellery";
import theme from "../Styles/theme";

const ContainerHome = styled.main`
  margin: auto;
`;

const SliderOfert = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const Hr = styled.hr`
  margin: 1rem 0;
  color: #dfdfdf;
  opacity: 0.25;
`;

const CategoriesSection = styled.section`
& > h1{
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 1rem 0;
}
@media only screen and (max-width: ${theme.breakpointsCustom.cs}px) {
  & > h1{
    font-size: 32px;
    font-weight: 400;
    margin: 0 0 1rem 0;
  }
`;
const CategoriesContainer = styled.section``;
const BestCellerySection = styled.section`
  & > h1 {
    font-size: 48px;
    font-weight: 400;
    margin: 0 0 1rem 0;
  }
  @media only screen and (max-width: ${theme.breakpointsCustom.cs}px) {
    & > h1 {
      font-size: 32px;
      font-weight: 400;
      margin: 0 0 1rem 0;
    }
  }
`;
const BestCelleryContainer = styled.section``;

function HomePage() {
  return (
    <ContainerHome>
      <SliderOfert>
        <SliderTop />
      </SliderOfert>
      <Hr></Hr>
      <CategoriesSection>
        <h1>Kategorie</h1>
        <CategoriesContainer>
          <SliderCategories />
        </CategoriesContainer>
      </CategoriesSection>
      <Hr></Hr>
      <BestCellerySection>
        <h1>BestCellery</h1>
        <BestCelleryContainer>
          <BestCellerySlider />
        </BestCelleryContainer>
      </BestCellerySection>
      <Hr></Hr>
    </ContainerHome>
  );
}

export default HomePage;
