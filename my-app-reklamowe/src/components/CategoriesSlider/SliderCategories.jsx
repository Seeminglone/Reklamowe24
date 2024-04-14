import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./categories.css";

import { FreeMode, Pagination } from "swiper/modules";
import { Stack, Alert } from "@mui/material";

import MenuProductEcoImg from "../../assets/Categories/menu-product-eco.png";
import SlodyczeImg from "../../assets/Categories/slodycze.png";
import KalendarzeImg from "../../assets/Categories/kalendarze.png";
import KubkiImg from "../../assets/Categories/kubki.png";
import PenDriveImg from "../../assets/Categories/pendrive.png";
import TorbyImg from "../../assets/Categories/torby.png";
import SmyczeImg from "../../assets/Categories/smycze.png";
import DlaDzieciImg from "../../assets/Categories/dla-dzieci.png";
import CzapkiImg from "../../assets/Categories/czapki.png";
import DoBiuraImg from "../../assets/Categories/do-biura.png";
import ElektronikaImg from "../../assets/Categories/elektronika.png";
import ParasoleImg from "../../assets/Categories/parasole.png";
import KoszulkiImg from "../../assets/Categories/koszulki.png";
import BrelokiImg from "../../assets/Categories/breloki.png";
import NarzedziaImg from "../../assets/Categories/narzedzia.png";
import PoligrafiaImg from "../../assets/Categories/poligrafia.png";
import WypoczynekImg from "../../assets/Categories/wypoczynek.png";
import PlazowanieImg from "../../assets/Categories/plazowanie.png";
import RoweroweImg from "../../assets/Categories/rowerowe.png";
import HamakiImg from "../../assets/Categories/hamaki.png";
import LezakiImg from "../../assets/Categories/lezaki.png";

export default function SliderCategories() {
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
        slidesPerView={11}
        spaceBetween={30}
        slidesPerGroup={11}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 6,
          },
          920: {
            slidesPerView: 11,
            slidesPerGroup: 11,
          },
        }}
      >
        <SwiperSlide>
          <img
            src={MenuProductEcoImg}
            style={{ width: "114px" }}
            alt="MenuProductEcoImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SlodyczeImg}
            style={{ width: "114px" }}
            alt="SlodyczeImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={KalendarzeImg}
            style={{ width: "114px" }}
            alt="KalendarzeImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={KubkiImg}
            style={{ width: "114px" }}
            alt="KubkiImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={PenDriveImg}
            style={{ width: "114px" }}
            alt="PenDriveImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={TorbyImg}
            style={{ width: "114px" }}
            alt="TorbyImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SmyczeImg}
            style={{ width: "114px" }}
            alt="SmyczeImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={DlaDzieciImg}
            style={{ width: "114px" }}
            alt="DlaDzieciImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={CzapkiImg}
            style={{ width: "114px" }}
            alt="CzapkiImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={DoBiuraImg}
            style={{ width: "114px" }}
            alt="DoBiuraImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ElektronikaImg}
            style={{ width: "114px" }}
            alt="ElektronikaImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ParasoleImg}
            style={{ width: "114px" }}
            alt="ParasoleImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={KoszulkiImg}
            style={{ width: "114px" }}
            alt="KoszulkiImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={BrelokiImg}
            style={{ width: "114px" }}
            alt="BrelokiImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={NarzedziaImg}
            style={{ width: "114px" }}
            alt="NarzedziaImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={PoligrafiaImg}
            style={{ width: "114px" }}
            alt="PoligrafiaImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={WypoczynekImg}
            style={{ width: "114px" }}
            alt="WypoczynekImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={PlazowanieImg}
            style={{ width: "114px" }}
            alt="PlazowanieImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={RoweroweImg}
            style={{ width: "114px" }}
            alt="RoweroweImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={HamakiImg}
            style={{ width: "114px" }}
            alt="HamakiImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={LezakiImg}
            style={{ width: "114px" }}
            alt="LezakiImg"
            onClick={() => handleClick("Strona nie jest dostępna")}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
