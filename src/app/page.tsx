import Image from "next/image";
import  {Navbar}  from "./components/Nav"
import Footer  from "./components/Footer"
import Slideshow  from "./components/Slideshow"
import Sweep from "./components/Sweep";
import Testimonials from "./components/Testimonials";
import Whatsapp from "./components/Whatsapp";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Whatsapp/>
      <Navbar />
      <Slideshow/>
      <Hero/>
      <Sweep/>
      <Testimonials/>
      <Footer />
    </main>
  );
}
