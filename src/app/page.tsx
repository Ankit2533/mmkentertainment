import Image from "next/image";
import  {Navbar}  from "./components/Nav"
import Footer  from "./components/Footer"
import Slideshow  from "./components/Slideshow"
import Sweep from "./components/Sweep";
import Testimonials from "./components/Testimonials";
import Whatsapp from "./components/Whatsapp";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Whatsapp/>
      <Navbar />
      <Slideshow/>
      <Aboutus/>
      <br />
      <Services/>
      <br />
      {/* <Sweep/> */}
      <Testimonials/>
      <Footer />
    </main>
  );
}
