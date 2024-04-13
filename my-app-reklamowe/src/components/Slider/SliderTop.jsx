import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ArtykulyPisemniczeImg from '../../assets/pismiennicze.jpg'
import KoszulkiImg from '../../assets/koszulki.jpg'
import TorbyReklamoweImg from '../../assets/Torby_reklamowe.jpg'
import styled from 'styled-components';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const StyledSwiperSlide = styled(SwiperSlide)`

`

export default function SliderTop() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  

  return (
    <>
    
      <Swiper
        pagination={pagination}
        className="mySwiper"
        // autoplay={{
        //   delay: 2500,
        //   // disableOnInteraction: false
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        
        <StyledSwiperSlide><img src={ArtykulyPisemniczeImg} alt='ArtykulyPisemniczeImg'/></StyledSwiperSlide>
        <StyledSwiperSlide><img src={KoszulkiImg} alt='KoszulkiImg'/></StyledSwiperSlide>
        <StyledSwiperSlide><img src={TorbyReklamoweImg} alt='TorbyReklamoweImg'/></StyledSwiperSlide>
      </Swiper>
      
    </>
  );
}
