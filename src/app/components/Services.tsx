import React from "react";

const Services = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We believe anything is possible, so think big or think wide, we will
            exceed your expectations in more ways than you can imagine and
            creating everlasting experiences.
            <br />
            Looking forward to lifetime association.
          </p>
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
              subtitle: "THE SUBTITLE",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgSrc: "/images/Events/3.jpg",
              title: "The 400 Blows",
              subtitle: "THE SUBTITLE",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgSrc: "/images/Events/4.jpg",
              title: "Neptune",
              subtitle: "THE SUBTITLE",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgSrc: "/images/Events/5.jpg",
              title: "Holden Caulfield",
              subtitle: "THE SUBTITLE",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
            {
              imgSrc: "/images/Events/6.jpg",
              title: "Alper Kamu",
              subtitle: "THE SUBTITLE",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            },
          ].map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.imgSrc}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
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
