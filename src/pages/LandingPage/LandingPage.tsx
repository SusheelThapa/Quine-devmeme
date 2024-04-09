import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

import { useFlags } from "flagsmith/react";

const LandingPage = () => {
  const flags = useFlags(["maintainance_break"]); // only causes re-render if specified flag values / traits change
  console.log(flags.maintainance_break.enabled);
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingPage;
