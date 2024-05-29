import React from "react";
import "/styles/style.css"; // Import the module CSS file

import Image from "next/image";
const Whatsapp = () => {
  return (
    <div className="Whatsapp"> {/* Use the CSS module class */}
      <a href="https://wa.me/917666655513" target="_blank" rel="noopener noreferrer"> {/* Add rel="noopener noreferrer" for security */}
        <Image  src="/images/whatsapp.gif" alt="whatsapp" /> {/* Use absolute path for image source */}
      </a>
    </div>
  );
};

export default Whatsapp;
