'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/styles/swiper.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slideshow = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/1.jpg" 
            alt="Event 1" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/2.jpg" 
            alt="Event 2" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/3.jpg" 
            alt="Event 3" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/4.jpg" 
            alt="Event 4" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/5.jpg" 
            alt="Event 5" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/6.jpg" 
            alt="Event 6" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/7.jpg" 
            alt="Event 7" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/8.jpg" 
            alt="Event 8" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <Image 
            src="/images/Events/9.jpg" 
            alt="Event 9" 
            layout="responsive" 
            width={1000} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slideshow;
