import Image from 'next/image';
import React from 'react';
import '/styles/font.css';

const Squad = () => {
  const members = [
    {
      name: 'Mishal Kalyani',
      position: 'Founder, Head of Business Development & Wedding Planning',
      description: `With a passion for creating unforgettable experiences and a knack for meticulously planning, Mishal is your go-to event person for any occasion. With 15+ years of experience in the industry, he has orchestrated a wide range of events, from intimate gatherings to large-scale wedding functions. Mishal excels at devising innovative and swift solutions for any challenge. He is our go-to expert in organization and coordination, ensuring seamless planning and flawless execution.`,
      image: '/team/mishal-kalyani.png', 
    },
    {
      name: 'Megha Kalyani',
      position: 'Founder, Head of Client Servicing & Hospitality',
      description: `Megha’s expertise in aligning objectives, crafting brand designs, and executing projects according to client specifications, promises to elevate the uniqueness of your experiential campaign. With a rich background in Client Servicing & Hospitality, she has successfully served renowned weddings of respectable families such as Motilal Oswal Group, Force Motors, Ex CM of Chhattisgarh, Kumar Properties, Ion Exchange India Ltd., among others.`,
      image: '/team/megha-kalyani.png', 
    },
    {
      name: 'Rajeev Choksi',
      position: 'Co- Founder, Head of Designing & Production',
      description: `Rajeev brings unparalleled vision and expertise to every wedding we craft. With a keen eye for detail and a passion for storytelling, he seamlessly blend innovative design with flawless execution. From conceptualizing unique themes to overseeing the smallest of details, his leadership ensures that every event is a breathtaking celebration of love, meticulously tailored to reflect each couple's distinct personality and style. Trust in his creative mastery to transform your dream wedding into a stunning reality.`,
      image: '/team/rajeev-choksi.png', 
    },
    {
      name: 'Kunjan Barot',
      position: 'Co-Founder, Head of Operations & Technical',
      description: `Drawing from over 13 years of industry and agency expertise, Kunjan champions the strategic use of technology and a laser-focused methodology in wedding management. His adept project management skills and task-oriented mindset ensure seamless execution of events with rapid turnaround times, ensuring every wedding is flawlessly planned and executed to perfection.`,
      image: '/team/kunjan-barot.png', 
    },
    {
      name: 'Bhuvan Kalyani',
      position: 'R & D and IT Solutions',
      description: `The young and dynamic R&D and IT solutions whiz-kid! With a passion for innovation and a knack for problem-solving, Bhuvan brings a breath of fresh ideas to our wedding management team. With his expertise, he ensures seamless technology integration and cutting-edge solutions, making every wedding experience unforgettable.`,
      image: '/team/bhuvan-kalyani.png', 
    },
    {
      name: 'Swapnil Jadhav',
      position: 'Manpower & Logistics Management',
      description: `He is our lifeline and steadfast pillar of strength, ensuring smooth logistics. A true multi-tasker, he handles every task, whether large or small, with remarkable skill and enthusiasm. On event days, he takes on additional responsibilities to ensure all guests as well as vendors are accommodated and manages any last-minute needs efficiently.`,
      image: '/team/swapnil-jadhav.png', 
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-medium title-font mb-4 golden-text">Meet the Minds</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Come meet the people who will help create your special day!</p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {members.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-between">
                <div className="w-full relative" style={{ height: '600px' }}>
                  <div className="relative w-full h-full overflow-hidden rounded-lg" style={{ maxWidth: '500px', maxHeight: '600px' }}>
                    <Image
                      className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="flex-grow text-center mt-3 sm:mt-4 md:mt-2 lg:mt-1 xl:mt-1">
                  <h2 className="text-lg text-gray-900 font-medium title-font pb-2 pt-2">{member.name}</h2>
                  <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font pb-3">{member.position}</h3>
                  <p className="leading-relaxed text-base">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Squad;
