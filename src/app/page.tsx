import About from "@/components/About";
import Apps from "@/components/Apps";
import Customize from "@/components/Customize";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import OurResponse from "@/components/OurResponse";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonals from "@/components/Testimonals";
import Trial from "@/components/Trial";
import UseExtention from "@/components/UseExtention";
import Yourdata from "@/components/Yourdata";
import Yourwork from "@/components/Yourwork";

export default function Home() {
  return (
    <div>

      <Header />
      <Hero />
      <About />
      <Services />
      <UseExtention />
      <Customize />
      <Pricing />
      <Yourwork />
      <Yourdata />
      <OurResponse />
      <Apps />
      <Testimonals />
      <Trial />
      <Footer />

    </div>
  );
}
