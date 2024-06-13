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
    thumbnail: "/background.jpg",
    caption: "Photo 1",
    carousel: ["/contactbackgroun.jpg", "/contactbackgroun.jpg"],
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
              style={{ maxWidth: '700px' }} // Adjust the max-width as needed
            />
            <p className="text-center mt-2 text-lg sm:text-xl">
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
