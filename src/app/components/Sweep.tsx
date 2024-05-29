"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "/styles/style.css";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

const Sweep = () => {
  return (
    <div className="bg-[#091933] ">
      <div className="flex flex-col text-center w-full text-white pt-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
          Services
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          We believe anything is possible, so think big or think wide, we will
          exceed your expectations in more ways than you can imagine and
          creating everlasting experiences.
          <br />
          <br />
          Looking forward to lifetime association.
        </p>
      <div className="pt-10">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySweep"
      >
        <SwiperSlide>
          <img src="/images/Services/wedding.png" alt="Wedding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Services/social.png" alt="Social Get-Together" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Services/anniversaries.png" alt="Anniversaries" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Services/corporate.png" alt="Corporate Events" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Services/birthday.png" alt="Birthday" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Services/concerts.png" alt="Live Concerts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Services/fashion.png" alt="Fashion Shows" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Services/festive.png" alt="Festive Events" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Services/manymore.png" alt="manymore" />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
      
    </div>
  );
};

export default Sweep;
