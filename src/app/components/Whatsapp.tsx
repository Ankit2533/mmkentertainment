import React from "react";
import "/styles/style.css"; // Import the module CSS file

import Image from "next/image";
const Whatsapp = () => {
  return (
    <div className="Whatsapp"> {/* Use the CSS module class */}
      <a href="https://wa.me/919322404922" target="_blank" rel="noopener noreferrer"> {/* Add rel="noopener noreferrer" for security */}
        <Image  src="/images/whatsapp.gif" alt="whatsapp"  width={100} height= {100}/> 
        </a>
    </div>
  );
};

export default Whatsapp;
