import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToOpportunities = () => {
    const element = document.getElementById("opportunities");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Lighter Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dmwvo0u6p/image/upload/v1759765737/kprcas-2048x912_serdir.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/50 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            KPR Incubation Hub
          </h1>
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-secondary font-semibold">
            Learn Beyond ~ Build Beyond
          </p>
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
            Where Innovation Meets Opportunity
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={scrollToOpportunities}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
