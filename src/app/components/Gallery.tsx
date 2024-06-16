// components/Gallery.tsx
"use client";
import "/styles/font.css";
import { useState } from "react";
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
    caption: "Anirudh and Warumporn",
    carousel: ["/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(1).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(2).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(3).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(4).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(5).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(6).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(7).jpg",
              "/images/Gallery/anirudh-and-warumporn/reception/anirudh-and-warumporn_reception(8).jpg",
              // "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(1).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(2).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(3).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(4).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(5).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(6).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(7).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(8).jpg",
              // "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(9).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(10).jpg",
              "/images/Gallery/anirudh-and-warumporn/sangeet/anirudh-and-warumporn_sangeet(11).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(1).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(2).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(3).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(4).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(5).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(6).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(7).jpg",
              // "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(8).jpg",
              "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(9).jpg",
              // "/images/Gallery/anirudh-and-warumporn/wedding/anirudh-and-warumporn_wedding(10).jpg",
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
    thumbnail: "/background.jpg",
    caption: "Photo 2",
    carousel: ["/contactbackgroun.jpg", "/contactbackgroun.jpg"],
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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains("overlay")) {
      setActiveCarousel(null);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 background-section">
      <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-medium title-font mb-9 golden-text text-center">
        Gallery
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-auto"
          >
            <img
              src={photo.thumbnail}
              alt={photo.caption}
              className="w-full h-auto cursor-pointer rounded-lg shadow-lg"
              onClick={() => setActiveCarousel(index)}
              style={{ maxWidth: '600px' }} // Adjust the max-width as needed
            />
            <p className="text-center mt-2 text-lg sm:text-2xl special-text ">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>


      {activeCarousel !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overlay"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-3xl mx-auto">
            <button
              className="absolute top-4 right-4 text-white text-3xl sm:text-4xl"
              onClick={() => setActiveCarousel(null)}
            >
              &times;
            </button>
            <Swiper
              spaceBetween={10}
              loop={true}
              slidesPerView={1}
              centeredSlides
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {photos[activeCarousel]?.carousel.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`${photos[activeCarousel]?.caption} ${idx + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
