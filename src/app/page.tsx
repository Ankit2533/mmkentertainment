import Image from "next/legacy/image";
import Slideshow from "./components/Slideshow";
import Testimonials from "./components/Testimonials";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Video from "./components/Video";
import Test from "./components/Testi";
import { PageWrapper } from "./components/page-wrapper";

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <Slideshow />
        <Aboutus />
        {/* <Video/> */}
        <Services />
        {/* <Testimonials/> */}

        <Test />
      </PageWrapper>
    </main>
  );
}
