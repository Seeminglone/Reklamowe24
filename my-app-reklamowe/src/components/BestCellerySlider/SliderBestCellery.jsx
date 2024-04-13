import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Stack, Alert } from "@mui/material";
import styled from "styled-components";

import { NewsProvider, useNewsContext } from "../../contexts/bestcellery";

const PriceContainer = styled.div`
  align-items: flex-end;
  color: #1b232d;
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  font-size: 33px;
  font-weight: 700;
  justify-content: flex-start;
  transition: 0.5s;
`;

const SpanTransform = styled.span`
  color: #ababab;
  font-size: 14px;
  height: 100%;
  transition: 0.5s;
`;

const BestCellerContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.07);
  padding: 1.7rem;
  width: 327px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    box-shadow: none;
    & ${PriceContainer} {
      transform: translateY(5px);
    }
    & ${SpanTransform} {
      transform: translateY(30px);
      opacity: 0;
    }
  }
`;
const BestCeller = styled.div``;
const ImageContainer = styled.div``;
const ItemNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 24px;
  height: 100%;
  padding-bottom: 10px;
  transition: 0.5s;
`;

const Span = styled.span`
  color: #ababab;
  font-size: 14px;
  height: 100%;
`;

const StyledImages = styled.img`
  height: auto !important;
  max-width: 100% !important;
  width: auto !important;
`;

export default function SliderBestcellery() {
    const { posts } = useNewsContext();
  console.log(posts);
    
  const [alertMessage, setAlertMessage] = useState("");

  const handleClick = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage(null);
    }, 1500);
  };

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  return (
    <>
      {alertMessage && (
        <Stack
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 16,
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
          spacing={2}
        >
          <Alert severity="error" onClose={handleCloseAlert}>
            {alertMessage}
          </Alert>
        </Stack>
      )}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={11}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BestCellerContainer>
            <BestCeller>
              <ImageContainer>
                <StyledImages src="https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg"></StyledImages>
              </ImageContainer>
              <ItemNameContainer>
                Kolorowe okulary
                <Span>Symbol: 10100900</Span>
              </ItemNameContainer>
              <PriceContainer>
                <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                  {" "}
                  cena od
                </small>
                <div>1,45 zł</div>
                <SpanTransform>Cena netto</SpanTransform>
              </PriceContainer>
            </BestCeller>
          </BestCellerContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BestCellerContainer>
            <BestCeller>
              <ImageContainer>
                <StyledImages src="https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg"></StyledImages>
              </ImageContainer>
              <ItemNameContainer>
                Kolorowe okulary
                <Span>Symbol: 10100900</Span>
              </ItemNameContainer>
              <PriceContainer>
                <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                  {" "}
                  cena od
                </small>
                <div>1,45 zł</div>
                <Span>Cena netto</Span>
              </PriceContainer>
            </BestCeller>
          </BestCellerContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BestCellerContainer>
            <BestCeller>
              <ImageContainer>
                <StyledImages src="https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg"></StyledImages>
              </ImageContainer>
              <ItemNameContainer>
                Kolorowe okulary
                <Span>Symbol: 10100900</Span>
              </ItemNameContainer>
              <PriceContainer>
                <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                  {" "}
                  cena od
                </small>
                <div>1,45 zł</div>
                <Span>Cena netto</Span>
              </PriceContainer>
            </BestCeller>
          </BestCellerContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BestCellerContainer>
            <BestCeller>
              <ImageContainer>
                <StyledImages src="https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg"></StyledImages>
              </ImageContainer>
              <ItemNameContainer>
                Kolorowe okulary
                <Span>Symbol: 10100900</Span>
              </ItemNameContainer>
              <PriceContainer>
                <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                  {" "}
                  cena od
                </small>
                <div>1,45 zł</div>
                <Span>Cena netto</Span>
              </PriceContainer>
            </BestCeller>
          </BestCellerContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BestCellerContainer>
            <BestCeller>
              <ImageContainer>
                <StyledImages src="https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg"></StyledImages>
              </ImageContainer>
              <ItemNameContainer>
                Kolorowe okulary
                <Span>Symbol: 10100900</Span>
              </ItemNameContainer>
              <PriceContainer>
                <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                  {" "}
                  cena od
                </small>
                <div>1,45 zł</div>
                <Span>Cena netto</Span>
              </PriceContainer>
            </BestCeller>
          </BestCellerContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BestCellerContainer>
            <BestCeller>
              <ImageContainer>
                <StyledImages src="https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg"></StyledImages>
              </ImageContainer>
              <ItemNameContainer>
                Kolorowe okulary
                <Span>Symbol: 10100900</Span>
              </ItemNameContainer>
              <PriceContainer>
                <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                  {" "}
                  cena od
                </small>
                <div>1,45 zł</div>
                <Span>Cena netto</Span>
              </PriceContainer>
            </BestCeller>
          </BestCellerContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BestCellerContainer>
            <BestCeller>
              <ImageContainer>
                <StyledImages src="https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg"></StyledImages>
              </ImageContainer>
              <ItemNameContainer>
                Kolorowe okulary
                <Span>Symbol: 10100900</Span>
              </ItemNameContainer>
              <PriceContainer>
                <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                  {" "}
                  cena od
                </small>
                <div>1,45 zł</div>
                <Span>Cena netto</Span>
              </PriceContainer>
            </BestCeller>
          </BestCellerContainer>
        </SwiperSlide>
        <SwiperSlide>
          <BestCellerContainer>
            <BestCeller>
              <ImageContainer>
                <StyledImages src="https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg"></StyledImages>
              </ImageContainer>
              <ItemNameContainer>
                Kolorowe okulary
                <Span>Symbol: 10100900</Span>
              </ItemNameContainer>
              <PriceContainer>
                <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                  {" "}
                  cena od
                </small>
                <div>1,45 zł</div>
                <Span>Cena netto</Span>
              </PriceContainer>
            </BestCeller>
          </BestCellerContainer>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
