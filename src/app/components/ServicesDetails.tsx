import React from 'react';
import Image from 'next/image';

const Section = () => {
  const imagePaths = [
    '/images/Events/1.jpg',
    '/images/Events/2.jpg',
    '/images/Events/3.jpg',
    '/images/Events/4.jpg',
    '/images/Events/5.jpg',
    '/images/Events/6.jpg',
    '/images/Events/7.jpg',
    '/images/Events/8.jpg',
    '/images/Events/9.jpg',
    '/images/Events/10.jpg'
  ];

  const content = [
    {
      title: "CONNECTING ON A DEEPER LEVEL",
      text: "Choosing the perfect venue and professionals can be thrilling yet daunting. Our dedicated team alleviates this burden by investing time to understand your vision, style, and guests' needs. We meticulously plan every aspect, offering personalized guidance and support throughout."
    },
    {
      title: "BUDGET MANAGEMENT",
      text: "A dream wedding hinges on a well-managed budget. Based on the couple's and families' preferences and priorities, we allocate funds to each department and recommend vendors accordingly. We estimate the total spend at the outset and continually monitor it during the planning period."
    },
    {
      title: "HOTEL & VENUE MANAGEMENT",
      text: "We excel in curating the ideal destination, whether international or national, to match your desired ambiance. Our expertise in destination and venue management ensures unforgettable experiences for you and your guests, bringing your vision to life."
    },
    {
      title: "INVITATIONS & GIFTING",
      text: "We assist in conceptualizing your wedding invitations, favors, and gifts—items you'll be excited to send out. We then find the perfect creators to bring these ideas to fruition, ensuring a personalized touch."
    },
    {
      title: "HOSPITALITY & GUEST MANAGEMENT",
      text: "From distributing invitations to crafting custom itineraries, we handle all aspects of guest hospitality. Coordinating with hotels for smooth check-ins and clearly communicating wedding schedules, we ensure your guests feel welcomed and can fully enjoy each moment of the event."
    },
    {
      title: "LOGISTICS COORDINATION & MANAGEMENT",
      text: "We manage all transportation logistics, ensuring your guests travel smoothly to and from the venue. Our goal is to make their arrival and departure stress-free, leaving them with happy memories of the event."
    },
    {
      title: "ENTERTAINMENT CURATION, COORDINATION & MANAGEMENT",
      text: "Whether it's a top DJ, live music, or a comedic emcee, we offer a full spectrum of entertainment options. We help you choose from global or local artists, ensuring your event has the perfect entertainment to keep your guests engaged and entertained."
    },
    {
      title: "FOOD DESIGNING & CATERING AGENCY MANAGEMENT",
      text: "Exceptional culinary experiences are our top priority. We help you choose your food team and meticulously design the menu presentation, ensuring the food is both delicious and visually stunning."
    },
    {
      title: "DÉCOR AGENCY COORDINATION & MANAGEMENT",
      text: "We take pride in understanding your unique taste and vision for wedding decor. We manage and coordinate with the decor team to ensure your dream visuals are flawlessly executed on your big day."
    },
    {
      title: "VENDOR COORDINATION & MANAGEMENT",
      text: "We handle all vendor coordination, ensuring seamless communication and planning from initial consultations to final execution. Our extensive network includes top photographers, videographers, choreographers, stylists, and makeup artists, all selected to meet our high standards of excellence and creativity."
    }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900">SERVICES</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {content.map((item, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center h-full">
                <div className="relative h-40 w-full overflow-hidden rounded mb-6">
                  <Image
                    src={imagePaths[index]}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">{item.title}</h2>
                <p className="leading-relaxed text-base flex-grow">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
