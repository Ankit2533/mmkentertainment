import React from "react";
import styles from '/styles/style.module.css';

import Image from "next/legacy/image";
const Whatsapp = () => {
  return (
    <div className={styles.Whatsapp}> {/* Use the CSS module class */}
      <a href="https://wa.me/919322404922" target="_blank" rel="noopener noreferrer" > {/* Add rel="noopener noreferrer" for security */}
        <Image  src="/images/whatsapp.gif" alt="whatsapp"  width={100} height= {100} unoptimized/> 
        </a>
    </div>
  );
};

export default Whatsapp;
