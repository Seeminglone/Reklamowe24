import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

import { FreeMode, Pagination } from "swiper/modules";
import { Stack, Alert } from "@mui/material";
import styled from "styled-components";

import { useNewsContext } from "../../contexts/bestcellery";

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
        slidesPerGroup={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1300: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide
            key={post.id}
            onClick={() => handleClick("Strona nie jest dostępna")}
          >
            <BestCellerContainer>
              <BestCeller>
                <ImageContainer>
                  <StyledImages
                    src={post.image ? post.image : ""}
                  ></StyledImages>
                </ImageContainer>
                <ItemNameContainer>
                  {post.name}
                  <Span>Symbol: {post.symbol}</Span>
                </ItemNameContainer>
                <PriceContainer>
                  <small style={{ fontSize: "16px", marginBottom: "-10px" }}>
                    {" "}
                    cena od
                  </small>
                  <div>{post.price} zł</div>
                  <SpanTransform>Cena netto</SpanTransform>
                </PriceContainer>
              </BestCeller>
            </BestCellerContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
