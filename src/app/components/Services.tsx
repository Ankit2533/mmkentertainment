import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="body-font bg-[#091933] text-white">
      <div className="container px-5 pb-10 mx-auto pt-5">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Services
          </h1>
          <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <p className="pb-3">
              We believe anything is possible, so think big or think wide, we
              will exceed your expectations in more ways than you can imagine
              and creating everlasting experiences.
            </p>
            <p>Looking forward to a lifetime association.</p>
          </div>
          <div className="flex justify-center mt-8">
            <button className="inline-flex items-center justify-center text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-[#F7CF4F] rounded-lg text-lg">
              Know More
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              imgSrc: "/images/Events/1.jpg",
              title: "Wedding Events",
              description:
                "Crafting enchanting weddings tailored to your dreams, from elegant ceremonies to breathtaking receptions",
            },
            {
              imgSrc: "/images/Events/2.jpg",
              title: "The Catalyzer",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgSrc: "/images/Events/3.jpg",
              title: "The 400 Blows",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgSrc: "/images/Events/4.jpg",
              title: "Neptune",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgSrc: "/images/Events/5.jpg",
              title: "Holden Caulfield",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgSrc: "/images/Events/6.jpg",
              title: "Alper Kamu",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
          ].map((item, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="h-full flex flex-col relative">
                <div className="flex-shrink-0 relative h-48 overflow-hidden">
                  <Image
                    alt="gallery"
                    src={item.imgSrc}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <div className="text-center px-4 py-2 bg-white bg-opacity-75">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed text-sm">
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
