"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "D:/Project/mmkentertainment/styles/style.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

const Sweep = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          Wedding Events
        </SwiperSlide>
        <SwiperSlide>Social Get-together </SwiperSlide>
        <SwiperSlide>Anniversaries</SwiperSlide>
        <SwiperSlide>Corporate Events</SwiperSlide>
        <SwiperSlide>Annual Meet</SwiperSlide>
        <SwiperSlide>Entertainment Events</SwiperSlide>
        <SwiperSlide>Live Concerts</SwiperSlide>
        <SwiperSlide>Fashion Shows</SwiperSlide>
        <SwiperSlide>Product Launch</SwiperSlide>
        <SwiperSlide>Festive Events</SwiperSlide>
        <SwiperSlide>And More</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sweep;
