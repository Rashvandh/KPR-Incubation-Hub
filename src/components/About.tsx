import { Building2, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Building2,
      value: "7,500+",
      label: "sq. ft. incubation space",
    },
    {
      icon: Users,
      value: "5",
      label: "startup teams incubated",
    },
    {
      icon: Lightbulb,
      value: "12",
      label: "new incubatees under scrutiny",
    },
    {
      icon: TrendingUp,
      value: "2",
      label: "product companies onboarding",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dmwvo0u6p/image/upload/v1759765737/kprcas-2048x912_serdir.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-muted/80" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            About KPR Incubation Hub 🚀
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            KPR Incubation Hub (I-Hub) is the innovation and startup arm of
            KPRCAS, soon to be registered as a Section 8 company to enable
            structured incubation and funding opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-heading font-bold text-3xl text-primary">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {item.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-primary italic">
            "Turning campus ideas into real-world startups."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
