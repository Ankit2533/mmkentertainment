import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Us
          </h1>
          <p className="font-bold">Discover the Strength of Our Strategic Methods</p>
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="text-center lg:w-2/3 w-full">
          <p className="mb-8 leading-relaxed text-justify">
          Mishal & Megha Kalyani, fuelled by a passion for travel and tradition, have steered MMK Entertainment to thrive in the dynamic landscape of the event and wedding industry. With a proven track record, we have skilfully orchestrated a diverse range of events, including corporate conferences, product launches, weddings and cultural extravaganzas. Our proficiency extends beyond event conceptualization and design; we excel in the seamless management of logistics, ensuring flawless execution. We take pride in transforming challenges into opportunities, offering innovative solutions, and consistently surpassing client expectations.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Know More
            </button>
            
          </div>
        </div>
      </div>
    </section>


  );
};

export default Hero;


// Mishal & Megha Kalyani, fuelled by a passion for travel and tradition, have steered MMK Entertainment to thrive in the dynamic landscape of the event and wedding industry. With a proven track record, we have skilfully orchestrated a diverse range of events, including corporate conferences, product launches, weddings and cultural extravaganzas. Our proficiency extends beyond event conceptualization and design; we excel in the seamless management of logistics, ensuring flawless execution. We take pride in transforming challenges into opportunities, offering innovative solutions, and consistently surpassing client expectations.