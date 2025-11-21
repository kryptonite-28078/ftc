import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Sparkles } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden bg-black/40">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary tracking-wider uppercase">Our Legacy</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              THE
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary text-glow ml-4">
              CHAMPIONS
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-0 bg-black/40 backdrop-blur-xl ring-1 ring-primary/30 shadow-[0_0_50px_rgba(0,255,136,0.15)] group hover:shadow-[0_0_80px_rgba(0,255,136,0.25)] transition-all duration-500">
            {/* Holographic Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-white/10 to-primary/30 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />

            <CardContent className="p-8 md:p-16 flex flex-col items-center text-center relative z-10">
              <div className="mb-8 p-6 rounded-full bg-primary/10 text-primary shadow-[0_0_30px_rgba(0,255,136,0.3)] animate-bounce" style={{ animationDuration: "3s" }}>
                <Trophy className="w-16 h-16 md:w-24 md:h-24" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded border border-primary/30 bg-primary/10 text-primary font-mono font-bold">2025</span>
                <span className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-primary animate-pulse">
                  <Sparkles className="w-4 h-4" /> Winner
                </span>
              </div>

              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 text-glow">
                APOC CHAMPIONS
              </h3>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                Overall winners of the prestigious <span className="text-white font-semibold">Asia Pacific Open Championship</span>.
                A historic victory in our rookie year, defining a new standard of excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
