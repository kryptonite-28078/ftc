import { Card, CardContent } from "@/components/ui/card";
import { Handshake, ArrowRight, Star, GraduationCap, Sprout, Lightbulb } from "lucide-react";
import uplLogo from "@/assets/sponsors/upl-logo.png";
import tisLogo from "@/assets/sponsors/tis-logo.png";
import daisLogo from "@/assets/sponsors/dais-logo.png";

const sponsors = [
  {
    name: "UPL OpenAg",
    logo: uplLogo,
    tier: "Platinum Sponsor",
    icon: Sprout,
    description: "Reimagining sustainability for the world's food systems.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    name: "The Innovation Story",
    logo: tisLogo,
    tier: "Gold Sponsor",
    icon: Lightbulb,
    description: "Empowering young minds through technology and innovation.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20",
  },
  {
    name: "Dhirubhai Ambani International School",
    logo: daisLogo,
    tier: "Institutional Partner",
    icon: GraduationCap,
    description: "Nurturing excellence and holistic development in education.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/10 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: "7s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wider uppercase">Our Partners</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              POWERED BY
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary text-glow ml-2 sm:ml-4">
              EXCELLENCE
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Our journey is supported by visionary organizations committed to the future of technology and education.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className={`relative overflow-hidden border ${sponsor.borderColor} bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 group`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.bgColor} via-transparent to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center h-full relative z-10">
                {/* Logo Area */}
                <div className="bg-white p-4 rounded-xl shadow-lg mb-6 w-full h-40 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                </div>

                {/* Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${sponsor.borderColor} ${sponsor.bgColor} ${sponsor.color}`}>
                  <sponsor.icon className="w-3 h-3" />
                  {sponsor.tier}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sponsor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Thank You Message */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <Card className="bg-gradient-to-br from-primary/5 via-card to-card border border-primary/20 overflow-hidden backdrop-blur-xl">
            <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4 animate-pulse" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Ideally Supported</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                We extend our deepest gratitude to our sponsors
                for believing in our team and supporting STEM education. Your investment in youth robotics creates
                <span className="text-primary font-semibold"> future engineers, scientists, and innovators</span>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-white/5 overflow-hidden">
            <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                <div className="p-3 sm:p-4 rounded-full bg-primary/10 text-primary shrink-0">
                  <Handshake className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">Want to Support Our Mission?</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Join our growing family of sponsors and make a difference.</p>
                </div>
              </div>

              <a
                href="mailto:team.kryptonite.28078.ftc@gmail.com,Shauryasule17@gmail.com?subject=Sponsorship%20Inquiry%20-%20Team%20Kryptonite"
                className="inline-flex items-center justify-center h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg bg-primary text-black font-bold hover:bg-primary/90 shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_50px_rgba(0,255,136,0.6)] hover:scale-105 transition-all duration-300 rounded-full whitespace-nowrap w-full sm:w-auto"
              >
                Become a Sponsor
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
