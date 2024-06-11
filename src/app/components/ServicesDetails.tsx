import React from 'react';
import Image from 'next/image';
import '/styles/font.css';
import '/styles/servicedetails.css';

const Section = () => {
  const images = [
    { path: '/detailservices/connecting-deeper-level.jpeg', name: 'connecting-deeper-level' },
    { path: '/detailservices/hospitality-and-guest.jpeg', name: 'hospitality-and-guest' },
    { path: '/detailservices/vendor-coordination-and-management1.jpeg', name: 'vendor-coordination-and-management' },
    { path: '/detailservices/budget-management.jpeg', name: 'budget-management' },
    { path: '/detailservices/hotel-and-venue-management2.jpeg', name: 'hotel-and-venue-management' },
    { path: '/detailservices/invitations-and-stationeries.jpeg', name: 'invitations-and-stationeries' },
    { path: '/detailservices/gifts-and-hampers.jpeg', name: 'gifts-and-hampers' },
    { path: '/detailservices/logistics-management2.jpeg', name: 'logistics-management' },
    { path: '/detailservices/entertainment-curation3.jpeg', name: 'entertainment-curation' },
    { path: '/detailservices/food-designing.jpeg', name: 'food-designing' },
    { path: '/detailservices/decor-agency.jpeg', name: 'decor-agency' },
    { path: '/detailservices/vidhi-management.jpeg', name: 'vidhi-management' }
  ];

  const content = [
    {
      title: "CONNECTING ON A DEEPER LEVEL",
      text: "With countless amazing venues and skilled professionals available globally, the choices can feel both thrilling and daunting. Our dedicated team recognizes the significance of these decisions and is here to alleviate the burden. We invest time to genuinely understand you, your vision, your distinctive style, and your guests' needs before making any commitments. From that point, we carefully plan every aspect of the process, offering personalized guidance and support throughout."
    },
    {
      title: "HOSPITALITY & GUEST MANAGEMENT",
      text: "We handle wedding invitation distribution and create custom itineraries for city or nearby attractions. We coordinate with the hotel for a smooth check-in, ensuring guests feel welcomed upon arrival. We help guests acclimate, clearly communicate the wedding itinerary for timely arrivals, and ensure they can fully enjoy each moment. We attend to every detail and cater to their needs throughout their stay to prevent any discomfort."
    },
    {
      title: "VENDOR COORDINATION & MANAGEMENT",
      text: "We handle all the coordination, ensuring seamless communication and planning with each vendor. From initial consultations to final execution, we manage every detail so you can enjoy a stress-free experience. Trust us to bring together the best talents to make your wedding truly unforgettable. Photographers, videographers, choreographers, stylists, and makeup artists: Our extensive network includes some of the most talented professionals in the industry. We meticulously select each vendor to ensure they meet our high standards of excellence and creativity."
    },
    {
      title: "BUDGET MANAGEMENT",
      text: "One of the most important aspects of bringing to life a dream wedding is the budget. Based on the preferences and priorities of the couple and their families, we allocate funds to each department and also recommend vendors within that bracket. While the estimated wedding spend is calculated at the beginning, we constantly monitor the same during the planning period."
    },
    {
      title: "HOTEL & VENUE MANAGEMENT",
      text: "International & National - We specialize in curating the perfect destination to match your desired ambiance, creating unforgettable experiences for you and your guests. Our expertise in destination and venue management ensures your vision becomes a reality."
    },
    {
      title: "INVITATIONS & STATIONERIES",
      text: "We will help you conceptualize your wedding invites, favors, and gifts—things you would be excited to send out. We will then find the perfect people to create them for you."
    },
    {
      title: "GIFTS & HAMPERS",
      text: "Great gifting ideas can become a key takeaway for your guests. It is a mark of the most landmark event in your life. A small token can speak a thousand words in a design that is befitting to the overall aesthetics of your wedding."
    },
    {
      title: "LOGISTICS COORDINATION & MANAGEMENT",
      text: "We handle all transportation logistics for your wedding with great care, making sure your guests travel to and from the venue smoothly. Our goal is to ensure their arrival and departure are easy and stress-free, leaving them with only happy memories of the event."
    },
    {
      title: "ENTERTAINMENT CURATION, COORDINATION & MANAGEMENT",
      text: "Illustrious names (celebrities) or hidden gems (entertaining artists) – we present you with the full spectrum. So, whether it’s a top DJ for a party that dances into the next day, live music to serenade your guests with, or an emcee that has you laughing all night, we’ve got you covered. Global or local – we help you choose entertainment artists from near and far!"
    },
    {
      title: "FOOD DESIGNING & CATERING AGENCY MANAGEMENT",
      text: "Our top priority is providing exceptional culinary experiences. We help you choose your food team and carefully design the menu presentation, ensuring the food not only tastes great but also looks stunning."
    },
    {
      title: "DÉCOR AGENCY COORDINATION & MANAGEMENT",
      text: "Embarking on a journey with you, we take pride in understanding your unique taste and vision for the wedding decor. With unwavering commitment, we manage and coordinate with the decor team, ensuring your dream visuals are achieved flawlessly on the big day."
    },
    {
      title: "VIDHI MANAGEMENT",
      text: "Looking into all requirements of any ritual or traditions that are involved with the occasion. Coordinating with the priest and your family to ensure all requirements are met. Ensuring all ritual and tradition requirements are meticulously addressed for your special occasion, coordinating closely with the priest and your family to meet every need."
    }
  ];

  return (
    <section className="text-gray-600 body-font background-section">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center justify-center mb-20">
          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-medium title-font mb-4 golden-text">Services</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {content.map((item, index) => (
            <div key={index} className="p-4 sm:w-1/2 lg:w-1/3 flex">
              <div className="p-6 rounded-lg flex flex-col items-center text-center h-full w-full para-text blurry-card">
                <div className="square-box mb-6">
                  <div className="square-box-content">
                    <Image
                      src={images[index].path}
                      alt={images[index].name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                  </div>
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
