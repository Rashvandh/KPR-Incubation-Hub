const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dmwvo0u6p/image/upload/v1759765737/kprcas-2048x912_serdir.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-primary/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dmwvo0u6p/image/upload/v1759764921/20231107_112302_gtikej.png"
              alt="KPR Incubation Hub"
              className="h-14 w-auto brightness-0 invert"
            />
            <span className="font-heading font-semibold text-lg">
              KPR Incubation Hub
            </span>
          </div>
          <p className="text-sm text-center md:text-right">
            © {new Date().getFullYear()} KPR Incubation Hub. A campus where
            ideas take flight.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
