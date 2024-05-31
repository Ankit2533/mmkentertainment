'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import styles from '/styles/style.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//import '/styles/style.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slideshow = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
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
      className={styles.mySwiper}
    >
      <SwiperSlide><Image src="/images/Events/1.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
      <SwiperSlide><Image src="/images/Events/2.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
      <SwiperSlide><Image src="/images/Events/3.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
      <SwiperSlide><Image src="/images/Events/4.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
      <SwiperSlide><Image src="/images/Events/5.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
      <SwiperSlide><Image src="/images/Events/6.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
      <SwiperSlide><Image src="/images/Events/7.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
      <SwiperSlide><Image src="/images/Events/8.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
      <SwiperSlide><Image src="/images/Events/9.jpg" alt="" width={1000} height={1000} layout="responsive" /></SwiperSlide>
    </Swiper>
  )
}

export default slideshow;
