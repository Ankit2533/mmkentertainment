import Image from "next/image";
import '/styles/font.css';
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center p-6 bg-[#091933] relative w-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#F7CF4F]"></div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <Image
            src="/images/logo.png" 
            alt="Company Logo"
            width={100} 
            height={100} 
            className="rounded-full"
          />
        </div>
        <nav className="text-lg mb-6 md:mb-0 flex flex-col md:items-start para-text-bold">
          <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:items-start ">
            <a
              href="/about"
              className="text-white font-bold p-3 mb-4 md:mb-0 md:ml-4 hover:bg-[#F7CF4F] hover:text-[#091933] rounded-lg transition duration-300"
            >
              ABOUT US
            </a>
            <a
              href="/gallery"
              className="text-white font-bold p-3 md:ml-4 hover:bg-[#F7CF4F] hover:text-[#091933] rounded-lg transition duration-300"
            >
              GALLERY
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
            <a
              href="/services"
              className="text-white font-bold p-3 mb-2 md:mb-0 md:ml-4 hover:bg-[#F7CF4F] hover:text-[#091933] rounded-lg transition duration-300"
            >
              SERVICES
            </a>
            <a
              href="/work"
              className="text-white font-bold p-3 md:ml-4 hover:bg-[#F7CF4F] hover:text-[#091933] rounded-lg transition duration-300"
            >
              WORK
            </a>
          </div>
        </nav>
        <div className="text-lg flex flex-col items-center md:justify-center para-text-bold">
          <div className="mb-4">
            <p className="text-white font-bold">CONNECT WITH US</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/mmkentertainment/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#091933] hover:bg-[#F7CF4F] rounded-full p-2 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.youtube.com/@mmkentertainment5334"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#091933] hover:bg-[#F7CF4F] rounded-full p-2 transition duration-300"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://www.facebook.com/mishalkalyani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#091933] hover:bg-[#F7CF4F] rounded-full p-2 transition duration-300"
            >
              <FaFacebookF size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-[#F7CF4F] my-6"></div>

      <div className="w-full text-center relative">
        <p
          className="font-bold italic text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl relative z-10 para-text"
          style={{
            backgroundImage: `url('/images/GoldBackground.jpg')`, // Using the src attribute directly
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          #MMKEntertainment
        </p>
      </div>

      {/* Copyright */}
      <div className="w-full text-center text-gray-700 mt-4">
        <p>&copy; {currentYear} MMKEntertainment. All Rights Reserved.</p>
        <p>
          Developed and Maintained by{" "}
          <a href="https://github.com/Ankit2533" className="text-gray-500">
            Ankit
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
