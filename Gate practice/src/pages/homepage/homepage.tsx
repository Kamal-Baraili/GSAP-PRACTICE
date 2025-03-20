import Contact from "../../components/ui/contact/contact";
import Hero from "../../components/ui/homepage/Hero";
import MainGateHero from "../../components/ui/homepage/mainGateHero";
import { Services } from "../../components/ui/our-services/services";
import Testimonial from "../../components/ui/testimonial/testimonial";

const Homepage = () => {
  return (
    <>
      <MainGateHero />
      <Hero />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Homepage;
