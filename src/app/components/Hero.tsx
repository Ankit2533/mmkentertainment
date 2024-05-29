import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
          <Image 
            className=" left-0 w-full h-full"
            alt="hero1"
            src="/images/Events/1.jpg"
            width={100}
            height={100}
          />
          <Image 
            className="  w-50% h-50%"
            alt="hero2"
            src="/images/Events/2.jpg"
            width={100}
            height={100}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1>About MMK Entertainment</h1>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Introducing the Next Generation of Wedding Planners
          </h2>
          <p className="mb-8 leading-relaxed text-justify pr-10">
            Our mission is to craft exceptional celebrations that bring loved
            ones together, honouring tradition while embracing innovation. We
            focus on every detail to surpass expectations and ensure your
            wedding is a memorable and extraordinary event. At MMK
            Entertainment, we work behind the scenes, tirelessly ensuring that
            everything goes off without a hitch. We meticulously manage every
            detail, regardless of size. On your special day, everything will be
            perfect—from your hair to the flowers to the chairs. Let us start
            crafting your story, the gateway to the rest of your life.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#091933] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Hero;
