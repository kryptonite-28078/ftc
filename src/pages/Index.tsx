import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      <Hero />
      <Achievements />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
