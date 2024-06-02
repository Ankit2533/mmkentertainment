import React from "react";
import Image from "next/image";
import '/styles/style.css';  // Import the CSS file

const Services = () => {
  return (
    <section className="body-font bg-[#091933] text-white border-t-4 border-b-4 border-[#F7CF4F]">
      <div className="container px-5 pb-10 mx-auto pt-5">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-medium title-font mb-4 golden-text">
            We Specialize In
          </h1>
          <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <p className="pb-3 pt-5">
              We believe anything is possible, so think big or think wide, we
              will exceed your expectations in more ways than you can imagine
              and create everlasting experiences.
            </p>
            <p>Looking forward to a lifetime association.</p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              imgSrc: "/images/Events/1.jpg",
              title: "Wedding Events",
              description:
                "Crafting enchanting weddings tailored to your dreams, from elegant ceremonies to breathtaking receptions.",
            },
            {
              imgSrc: "/images/Events/2.jpg",
              title: "Destination Weddings",
              description:
                "Organizing picturesque destination weddings that offer a unique and memorable experience.",
            },
            {
              imgSrc: "/images/Events/3.jpg",
              title: "Celebrity and Artist Management",
              description:
                "Providing top-tier celebrities and artists, along with comprehensive management to make your events stand out.",
            },
            {
              imgSrc: "/images/Events/4.jpg",
              title: "Personal Celebrations",
              description:
                "Creating beautiful and memorable celebrations for anniversaries, baby showers, birthday parties, and more.",
            },
            {
              imgSrc: "/images/Events/5.jpg",
              title: "Corporate Events",
              description:
                "Delivering professional and seamless corporate events to help your business shine.",
            },
            {
              imgSrc: "/images/Events/6.jpg",
              title: "Gifts and Hampers",
              description:
                "Curating exquisite gifts and hampers for all occasions, adding a personal touch to your celebrations.",
            },
          ].map((item, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="h-full flex flex-col relative border-2 border-[#F7CF4F] rounded-lg">
                <div className="image-container flex-shrink-0 relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    alt="gallery"
                    src={item.imgSrc}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 rounded-t-lg">
                    <div className="text-center px-4 py-2 bg-white bg-opacity-75">
                      <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed text-sm text-black">
                        {item.description}
                      </p>
                    </div>
                  </div>
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
