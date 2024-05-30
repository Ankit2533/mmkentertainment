import Image from "next/legacy/image";
import Slideshow  from "./components/Slideshow"
import Testimonials from "./components/Testimonials";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Slideshow/>
      <Aboutus/>
      <Services/>
      <Testimonials/>
    </main>
  );
}
