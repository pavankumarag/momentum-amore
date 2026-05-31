import Hero from "@/components/Hero";
import About from "@/components/About";
import EventDetails from "@/components/EventDetails";
import HowItWorks from "@/components/HowItWorks";
import Rules from "@/components/Rules";
import MatchProcess from "@/components/MatchProcess";
import RegistrationForm from "@/components/RegistrationForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventDetails />
      <HowItWorks />
      <MatchProcess />
      <Testimonials />
      <RegistrationForm />
      <Rules />
      <Contact />
    </>
  );
}
