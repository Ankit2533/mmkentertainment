"use client";
import "/styles/font.css";
import { useState,useEffect,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '/styles/servicedetails.css';

interface Photo {
  thumbnail: string;
  caption: string;
  carousel: string[];
}

const photos: Photo[] = [
  {
    thumbnail: "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(1).jpg",
    caption: "Anirudh and Pam",
    carousel: ["/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(1).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(2).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(3).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(4).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(5).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(6).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(7).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(8).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(9).JPG",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(1).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(2).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(3).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(4).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(5).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(6).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(7).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(8).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(9).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(10).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(11).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(1).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(2).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(3).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(4).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(5).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(6).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(7).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(8).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(9).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(10).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(11).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(12).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(13).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(14).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(15).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(16).jpg",
              // "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(17).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(18).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(19).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(20).jpg",
            ],
  },
  {
    thumbnail: "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(29).jpg",
    caption: "Manisha and Neel",
    carousel: ["/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(1).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(2).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(3).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(4).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(5).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(6).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(7).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(8).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(9).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(10).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(11).jpg",
                "/images/Gallery/manisha-and-neel/Haldi/manisha-and-neel-haldi(11).jpg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(1).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(1).jpg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(2).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(2).jpg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(3).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(3).jpg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(4).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(4).jpg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(5).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(5).jpg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(6).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(6).jpg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(7).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(8).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(9).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(10).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(11).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(12).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(13).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(14).jpeg",
                "/images/Gallery/manisha-and-neel/Sangeet/manisha-and-neel-sangeet(15).jpeg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(1).JPEG",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(1).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(1).PNG",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(2).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(3).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(4).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(5).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(6).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(7).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(8).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(9).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(10).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(11).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(12).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(13).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(14).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(15).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(16).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(17).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(18).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(19).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(20).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(21).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(22).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(23).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(24).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(25).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(26).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(27).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(28).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(29).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(30).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(31).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(32).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(33).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(34).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(35).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(36).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(37).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(38).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(39).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(40).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(41).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(42).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(43).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(44).jpg",
                "/images/Gallery/manisha-and-neel/Wedding/manisha-and-neel-wedding(45).jpg",
                "/images/Gallery/manisha-and-neel/Team/manisha-and-neel-team(1).jpg",
                "/images/Gallery/manisha-and-neel/Team/manisha-and-neel-team(2).jpg",
                
            ],
  },
  {
    thumbnail: "/background.jpg",
    caption: "Photo 3",
    carousel: ["/contactbackgroun.jpg", "/contactbackgroun.jpg"],
  },
  {
    thumbnail: "/background.jpg",
    caption: "Photo 4",
    carousel: ["/contactbackgroun.jpg", "/contactbackgroun.jpg"],
  },
  {
    thumbnail: "/background.jpg",
    caption: "Photo 5",
    carousel: ["/contactbackgroun.jpg", "/contactbackgroun.jpg"],
  },
  // Add other photo objects here...
];

export default function Gallery() {
  const [activeCarousel, setActiveCarousel] = useState<number | null>(null);
  const swiperRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setActiveCarousel(null);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 background-section">
      <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-medium title-font mb-9 golden-text text-center">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div 
              className="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setActiveCarousel(index)}
            >
              <img
                src={photo.thumbnail}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-center mt-2 text-lg sm:text-2xl special-text">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      {activeCarousel !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl sm:text-4xl z-10"
              onClick={() => setActiveCarousel(null)}
            >
              &times;
            </button>
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              loop={true}
              pagination={{
                dynamicBullets: true,
                clickable: true
              }}
              navigation
              modules={[Navigation, Pagination]}
              className="w-full h-full"
            >
              {photos[activeCarousel]?.carousel.map((src, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center bg-transparent">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={src}
                      alt={`${photos[activeCarousel]?.caption} ${idx + 1}`}
                      className="max-w-full max-h-full object-contain"
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '90%',
                        maxHeight: '90vh',
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}