import { Rocket, Sparkles, Users2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Opportunities = () => {
  const initiatives = [
    {
      icon: Rocket,
      title: "Incubation Support",
      items: [
        "Coworking spaces & infrastructure",
        "Mentorship programs",
        "IP protection guidance",
        "Investor access & networking",
        "Demo days & pitch events",
        "Workshops & skill development",
      ],
    },
    {
      icon: Sparkles,
      title: "Innovation Platforms",
      items: [
        "TEDx Studio @KPRCAS",
        "In-House Web Dev Cell",
        "Co-Incubation Collaborations",
        "Centre for Excellence & Translational Research",
        "AI & Innovation Labs",
        "Research partnerships",
      ],
    },
    {
      icon: Users2,
      title: "Entrepreneurial Community",
      items: [
        "Entrepreneurs-in-Residence",
        "Peer-to-peer learning",
        "Startup networking events",
        "Industry expert sessions",
        "Alumni mentor network",
        "Community-driven growth",
      ],
    },
  ];

  const stages = ["Ideation", "Incubation", "Acceleration"];

  return (
    <section id="opportunities" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dmwvo0u6p/image/upload/v1759765737/kprcas-2048x912_serdir.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Opportunities & Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for your entrepreneurial journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full shadow-glow">
                    <initiative.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-center font-heading text-xl">
                  {initiative.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {initiative.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Journey Flow */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            {/* Background line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary transform -translate-y-1/2 -z-10" />
            
            {stages.map((stage, index) => (
              <div key={index} className="flex-1 text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white font-heading font-bold text-lg shadow-glow mb-3">
                  {index + 1}
                </div>
                <p className="font-heading font-semibold text-foreground">
                  {stage}
                </p>
                {index < stages.length - 1 && (
                  <ArrowRight className="absolute top-6 -right-4 h-5 w-5 text-primary hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <p className="font-heading font-bold text-xl md:text-2xl text-foreground">
            At KPRCAS, Opportunities are Two-Fold
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Build Startups. Build the Incubation Ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
