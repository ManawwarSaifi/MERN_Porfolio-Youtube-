import Sidebar from '../../img/sidebar.png';
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Musicapp  from "../../img/musicapp.png";
import {Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import('./Portfolio.css')
import ('swiper/css')


export const Portfolio = () => {
  return (
   <div className="portfolio">
    { /* heading*/}
    <span>Recent Projects</span>
    <span>Portfolio</span>


    { /* Swiper*/}
    <Swiper
    spaceBetween={30}
    slidesPerView={2}
    grabCursor={true}
    className='portfolio-slider'
    >
        <SwiperSlide>
            <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Musicapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={HOC} alt="" />
        </SwiperSlide>
    </Swiper>
   </div>
  )
}
