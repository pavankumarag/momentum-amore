import Hero from "@/components/Hero";
import About from "@/components/About";
import EventDetails from "@/components/EventDetails";
import HowItWorks from "@/components/HowItWorks";
import Rules from "@/components/Rules";
import RegistrationForm from "@/components/RegistrationForm";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventDetails />
      <HowItWorks />
      <RegistrationForm />
      <Rules />
      <Contact />
    </>
  );
}
