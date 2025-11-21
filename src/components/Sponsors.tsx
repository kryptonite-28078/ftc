import { Card, CardContent } from "@/components/ui/card";
import { Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 px-4 bg-secondary/10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Handshake className="w-3 h-3" />
            Partnership
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Partner With Us
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Join us in shaping the future of robotics. Your support empowers the next generation of engineers, innovators, and leaders.
          </p>

          <Card className="bg-card border-white/5 overflow-hidden max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-10 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Sponsorship Opportunities</h3>
              <p className="text-muted-foreground mb-8 text-sm md:text-base">
                We offer various sponsorship tiers with benefits including brand visibility on our robot, team apparel, and digital platforms.
              </p>

              <Button
                size="lg"
                className="h-12 px-8 text-base bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 rounded-md"
                onClick={() => window.location.href = 'mailto:contact@teamkryptonite.com'}
              >
                Inquire About Sponsorships
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
