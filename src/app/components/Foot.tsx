import Image from 'next/image';
import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-6 bg-[#091933] relative">
      {/* Golden border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#F7CF4F]"></div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto">
        
        {/* First Column: Logo */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <Image
            src="/images/logo.png" // Update with the correct path to your logo
            alt="Company Logo"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="rounded-full"
          />
        </div>
        
        {/* Second Column: Links */}
        <nav className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <div className="flex flex-col md:flex-row md:space-x-8 mb-4 items-center md:items-start">
            <a href="/about" className="text-white font-bold mb-2 md:mb-0">ABOUT US</a>
            <a href="/gallery" className="text-white font-bold">GALLERY</a>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
            <a href="/services" className="text-white font-bold mb-2 md:mb-0">SERVICES</a>
            <a href="/work" className="text-white font-bold">WORK</a>
          </div>
        </nav>
        
        {/* Third Column: Contact & Social Media */}
        <div className="flex flex-col items-center md:items-end">
          <div className="mb-4">
            <a href="/contact" className="text-white font-bold">CONTACT US</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaInstagram size={30} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaYoutube size={30} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaFacebookF size={30} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">&copy; 2024 MMKEntertainment. Developed by <a href="https://yourdeveloperlink.com" className="text-blue-500 hover:underline">Your Developer</a></p>
      </div>
    </footer>
  );
};

export default Footer;
