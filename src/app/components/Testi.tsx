'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import '/styles/font.css'; 
import { Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    gif: '/testimonials/Anirudh.gif',
    text: 'MMK is very good with their event management work. Would highly recommend their services! MMK did a great job with my wedding event management. They ensured that everything was managed well relieving the family / friends from any stress and ensuring that everyone thoroughly enjoyed!',
  },
  {
    gif: '/testimonials/Anirudh.gif',
    text: 'THANK YOU so much for everything you’ve done for us not just for our wedding days, but all the hard work leading up to it over the past year! All the video calls at odd times, journeying to venues and talking to vendors for us when we couldn’t, advocating for us with vendors including the decor, ITC hotel management, and Imara- it all means so much to us because we truly had the BEST wedding and it was more than anything we could have ever imagined.',
  },
  {
    gif: '/testimonials/Anirudh.gif',
    text: 'We felt so at ease putting our big day in your hands and never felt worried about planning a wedding overseas thanks to your attention to detail, organized planning, and always pumping us up and getting us excited! It still feels surreal that the wedding happened- every moment was filled with so much love, laughter, and joy, and ALL the little details were so perfect.',
  },
  {
    gif: '/testimonials/Anirudh.gif',
    text: 'We can’t wait to send photos and also hope we can stay in touch- the next time we come to Mumbai we are going out together! And we will absolutely refer any of our friends and family planning events to you! Best of luck with the next events and weddings you’re planning… and at some point the next big wedding to plan should be your vow renewal celebration since you still need to have a big wedding!',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div 
      className="w-full h-full p-6 bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: 'url(/background/testibackground.jpg)', 
        minHeight: '100vh', 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <h2 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-medium title-font mb-4 text-center golden-text">
        What They Say
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4490 }}
        style={{ height: 'auto'}}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center h-full pt-10 pb-10 p-4">
              <div className="w-full h-auto flex-shrink-0 flex justify-center">
                <div className="relative" style={{ width: '100%', paddingBottom: '50%' }}>
                  <Image
                    src={testimonial.gif}
                    alt={`Testimonial ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    unoptimized
                  />
                </div>
              </div>
              <div className="w-full px-10 py-4 flex-grow flex items-center justify-center bg-transparent">
                <p className="text-lg sm:text-xl md:text-2xl text-center text-black">
                  <FaQuoteLeft className="inline-block mr-2 text-gray-300" />
                  {testimonial.text}
                  <FaQuoteRight className="inline-block ml-2 text-gray-300" />
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
