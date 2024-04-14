import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtykulyPisemniczeImg from "../../assets/pismiennicze.jpg";
import KoszulkiImg from "../../assets/koszulki.jpg";
import TorbyReklamoweImg from "../../assets/Torby_reklamowe.jpg";
import styled from "styled-components";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const StyledSwiperSlide = styled(SwiperSlide)`
  cursor: pointer;
`;

export default function SliderTop() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  const [alertMessage, setAlertMessage] = useState(null);

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
      <Swiper
        pagination={pagination}
        className="mySwiper"
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <StyledSwiperSlide
          onClick={() => handleClick("Strona nie jest dostępna")}
        >
          <span>
            <img src={ArtykulyPisemniczeImg} alt="ArtykulyPisemniczeImg" />
          </span>
        </StyledSwiperSlide>
        <StyledSwiperSlide
          onClick={() => handleClick("Strona nie jest dostępna")}
        >
          <span>
            <img src={KoszulkiImg} alt="KoszulkiImg" />
          </span>
        </StyledSwiperSlide>
        <StyledSwiperSlide
          onClick={() => handleClick("Strona nie jest dostępna")}
        >
          <span>
            <img src={TorbyReklamoweImg} alt="TorbyReklamoweImg" />
          </span>
        </StyledSwiperSlide>
      </Swiper>
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
    </>
  );
}
