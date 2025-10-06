import {
  GraduationCap,
  Award,
  BookOpen,
  Lightbulb,
  Globe,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const KPRCAS = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "18 UG, 2 PG & 4 Research Programs",
      description: "Comprehensive academic offerings",
    },
    {
      icon: Award,
      title: "51 University Rankings",
      description: "2024–2025 Excellence",
    },
    {
      icon: BookOpen,
      title: "34 Value-Added Courses",
      description: "Beyond traditional curriculum",
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs & AI Ecosystems",
      description: "Cutting-edge facilities",
    },
    {
      icon: Globe,
      title: "Global Collaborations",
      description: "Research partnerships worldwide",
    },
    {
      icon: Sparkles,
      title: "Beyond the Classroom",
      description: "Entrepreneurship & real-world learning",
    },
  ];

  return (
    <section id="kprcas" className="py-20 relative overflow-hidden">
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
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            About KPRCAS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic & Innovation Ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/10">
            <p className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Shaping the next generation of leaders, innovators, and
              entrepreneurs
            </p>
            <p className="text-lg text-muted-foreground">
              Where academic excellence meets entrepreneurial spirit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPRCAS;
