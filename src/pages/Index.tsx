import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Opportunities from "@/components/Opportunities";
import KPRCAS from "@/components/KPRCAS";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Opportunities />
      <KPRCAS />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
