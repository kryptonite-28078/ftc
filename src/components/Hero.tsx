import { ArrowRight, ChevronDown, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import kryptoniteLogo from "@/assets/kryptonite-logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Robotics technology"
          className="w-full h-full object-cover opacity-20 scale-105 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: "5s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center max-w-5xl">

        {/* Logo with Glow */}
        <div className="mb-8 md:mb-10 relative group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-all duration-500" />
          <img
            src={kryptoniteLogo}
            alt="Kryptonite Logo"
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] mx-auto drop-shadow-[0_0_40px_rgba(0,255,136,0.6)] transition-transform duration-500 group-hover:scale-105 object-contain"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 mb-6 sm:mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md hover:bg-primary/10 transition-colors cursor-default animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">APOC Champions</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 text-glow">
            TEAM
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary text-glow animate-gradient-x">
            KRYPTONITE
          </span>
        </h1>

        {/* Team Number */}
        <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/80 tracking-widest font-mono border-b-2 border-primary/50 pb-1">
            #28078
          </span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 px-2">
          We are the <span className="text-primary font-semibold">Rookie Year Champions</span>.
          Pushing the absolute boundaries of robotics innovation and engineering excellence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 w-full px-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("team")}
            className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-primary text-black font-bold hover:bg-primary/90 shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_50px_rgba(0,255,136,0.6)] hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
          >
            Meet the Team
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("achievements")}
            className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            Our Achievements
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
