import { MapPin, Mail, Globe, LinkedinIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content:
        "KPR College of Arts, Science & Research, Avinashi Road, Arasur, Coimbatore – 641407",
    },
    {
      icon: Mail,
      title: "Email",
      content: "ihub@kprcas.ac.in",
      link: "mailto:ihub@kprcas.ac.in",
    },
    {
      icon: Globe,
      title: "Website",
      content: "www.kprcas.ac.in",
      link: "https://kprcas.ac.in/",
    },
    {
      icon: LinkedinIcon,
      title: "LinkedIn",
      content: "",
      link: "https://www.linkedin.com/company/kpr-incubation-hub",
      iconOnly: true,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dmwvo0u6p/image/upload/v1759765737/kprcas-2048x912_serdir.jpg')",
          backgroundColor: "#f8fafc", // fallback
        }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Contact
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Connect with Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with KPR Incubation Hub
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center space-y-4">
                {/* Only show top icon if it's not iconOnly (LinkedIn card) */}
                {!item.iconOnly && (
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-primary rounded-full shadow-glow">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {item.title}
                  </h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        item.iconOnly ? "flex justify-center" : "block"
                      } text-primary hover:text-primary/80 transition-colors`}
                    >
                      {item.iconOnly ? (
                        <div className="p-3 bg-[#0077b5] rounded-full shadow-glow hover:shadow-glow-lg hover:scale-110 transition-all duration-300">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                      ) : (
                        item.content
                      )}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary p-[2px] rounded-2xl">
            <div className="bg-background rounded-2xl px-8 py-6">
              <p className="font-heading text-lg md:text-xl font-semibold text-foreground">
                KPRCAS: Shaping the next generation of leaders, innovators, and
                entrepreneurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
