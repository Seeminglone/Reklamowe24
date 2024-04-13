import React from "react";
import SliderTop from "../components/Slider/SliderTop";
import styled from "styled-components";


const ContainerHome = styled.div`
`;


const SliderOfert = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const Hr = styled.hr`
margin: 1rem 0;
color: #DFDFDF;
opacity: 0.25
`

function HomePage() {
  return (
    <ContainerHome>
      <SliderOfert>
        <SliderTop />
      </SliderOfert>
      <Hr></Hr>
    </ContainerHome>
  );
}

export default HomePage;
