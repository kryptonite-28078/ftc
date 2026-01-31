import { Card, CardContent } from "@/components/ui/card";
import { Bot, Crosshair, Cog, Settings, Database } from "lucide-react";
import botImage from "@/assets/bot-kobe.png";

const features = [
    {
        icon: Database,
        title: "Feeder Mechanism",
        desc: "6 breakbeam sensors; as soon as artifacts are detected, the ball moves due to a slider.",
    },
    {
        icon: Crosshair,
        title: "Shooter System",
        desc: "Adjustable hood flywheel for precise, multi-range scoring capabilities.",
    },
    {
        icon: Cog,
        title: "Intake System",
        desc: "Dual-stage intake designed for fast and consistent artifact collection.",
    },
    {
        icon: Settings,
        title: "Swerve Drive",
        desc: "Independent wheel modules for precise omnidirectional movement and agility.",
    },
];

const BotSection = () => {
    return (
        <section id="bot" className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden bg-black/40">
            <div className="container mx-auto">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                        <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
                        <span className="text-xs sm:text-sm font-bold text-primary tracking-wider uppercase">
                            Engineering Marvel
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6 text-white tracking-tight">
                        Meet <span className="text-primary text-glow">KR "KOBE" 36</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        A masterclass in precision engineering, designed for domination on the field.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left: Image */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
                        <Card className="relative overflow-hidden border-primary/20 bg-black/60 backdrop-blur-sm shadow-[0_0_50px_rgba(0,255,136,0.1)] group-hover:shadow-[0_0_80px_rgba(0,255,136,0.2)] transition-all duration-500">
                            <CardContent className="p-0">
                                <img
                                    src={botImage}
                                    alt="KR KOBE 36 Bot"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right: Features */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="bg-secondary/10 border-white/5 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-300 group/feature"
                            >
                                <CardContent className="p-5 sm:p-6">
                                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover/feature:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover/feature:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BotSection;
