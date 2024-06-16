'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import '/styles/font.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const handleTestimonialsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/#testimonials');
  };

  return (
    <footer className="flex flex-col items-center p-6 bg-[#091933] relative w-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FCC200]"></div>
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
        <nav className="text-lg mb-6 md:mb-0 flex flex-col items-center md:items-start para-text-bold">
          <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:items-start">
            <a
              href="/about"
              className="text-white font-bold p-3 mb-4 md:mb-0 md:ml-4 hover:bg-[#FCC200] hover:text-[#091933] rounded-lg transition duration-300"
            >
              ABOUT US
            </a>
            <a
              href="/services"
              className="text-white font-bold p-3 md:ml-4 hover:bg-[#FCC200] hover:text-[#091933] rounded-lg transition duration-300"
            >
              SERVICES
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
            <a
              href="/gallery"
              className="text-white font-bold p-3 mb-2 md:mb-0 md:ml-4 hover:bg-[#FCC200] hover:text-[#091933] rounded-lg transition duration-300"
            >
              GALLERY
            </a>
            <a
              href="/contact"
              className="text-white font-bold p-3 md:ml-4 hover:bg-[#FCC200] hover:text-[#091933] rounded-lg transition duration-300"
            >
              CONTACT US
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
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/social/instagram_logo_icon.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.youtube.com/@mmkentertainment5334"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/social/youtube_logo_icon.png"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.facebook.com/mishalkalyani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/social/facebook_logo_icon.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-[#FCC200] my-6"></div>

      <div className="w-full text-center relative">
        <p
          className="font-bold italic text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl relative z-10 para-text text-[#FCC200]">
          #MMKEntertainment
        </p>
      </div>

      <div className="w-full text-center text-gray-700 mt-4">
        <p>&copy; {currentYear} MMKEntertainment. All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
