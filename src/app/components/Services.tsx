import React from "react";
import Image from "next/image";
import '/styles/font.css';  // Import the CSS file

const Services = () => {
  return (
    <section className="body-font bg-[#091933] text-white border-t-4 border-b-4 border-[#FCC200]">
      <div className="px-5 pb-10 mx-auto pt-5">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-medium title-font mb-4 golden-text-white">
            We Specialize In
          </h1>
          <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <p className="pb-3 pt-5 text-lg para-text">
              We believe anything is possible, so think big or think wide, we
              will exceed your expectations in more ways than you can imagine
              and create everlasting experiences.
            </p>
            <p className="text-2xl special-text">Looking forward to a lifetime association.</p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              imgSrc: "/services/wedding_events.jpeg",
              title: "Wedding Events",
              description:
                "Crafting enchanting weddings tailored to your dreams, from elegant ceremonies to breathtaking receptions.",
            },
            {
              imgSrc: "/services/destination_weddings.jpeg",
              title: "Destination Weddings",
              description:
                "Organizing picturesque destination weddings that offer a unique and memorable experience.",
            },
            {
              imgSrc: "/services/celebrity_artist_management.png",
              title: "Celebrity and Artist Management",
              description:
                "Providing top-tier celebrities and artists, along with comprehensive management to make your events stand out.",
            },
            {
              imgSrc: "/services/personal_celebrations.png",
              title: "Personal Celebrations",
              description:
                "Creating beautiful and memorable celebrations for anniversaries, baby showers, birthday parties, and more.",
            },
            {
              imgSrc: "/services/corporate_events.png",
              title: "Corporate Events",
              description:
                "Delivering professional and seamless corporate events to help your business shine.",
            },
            {
              imgSrc: "/services/gifts_hampers.png",
              title: "Gifts and Hampers",
              description:
                "Curating exquisite gifts and hampers for all occasions, adding a personal touch to your celebrations.",
            },
          ].map((item, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="h-full flex flex-col relative border-2 border-[#FCC200] rounded-lg para-text group overflow-hidden">
                <div className="relative h-96 w-full overflow-hidden rounded-t-lg">
                  <Image
                    alt="gallery"
                    src={item.imgSrc}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg transform transition-transform duration-300 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-4">
                      <h1 className="text-2xl font-bold text-white mb-3">{item.title}</h1>
                      <p className="text-base text-white">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 p-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  <h1 className="text-lg font-bold text-white text-center">{item.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
