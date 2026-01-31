import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Rocket, Users, Lightbulb, Code, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const FirstEndorsement = () => {
    return (
        <section id="first" className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-to-r from-orange-500/10 via-red-500/10 to-red-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "8s" }} />
                <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: "6s" }} />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full border border-orange-400/30 bg-orange-500/10 backdrop-blur-sm">
                        <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                        <span className="text-xs sm:text-sm font-bold text-orange-400 tracking-wider uppercase">Proudly Part of FIRST</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-red-500">
                            FIRST
                        </span>
                        <span className="text-white/90 ml-2 sm:ml-4">Tech Challenge</span>
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
                        <span className="font-semibold text-orange-400">F</span>or <span className="font-semibold text-orange-400">I</span>nspiration and <span className="font-semibold text-orange-400">R</span>ecognition of <span className="font-semibold text-orange-400">S</span>cience and <span className="font-semibold text-orange-400">T</span>echnology —
                        Building the leaders of tomorrow through robotics.
                    </p>
                </div>

                {/* Main FIRST Card */}
                <Card className="max-w-5xl mx-auto bg-gradient-to-br from-card via-card/80 to-card/60 border border-orange-400/20 overflow-hidden backdrop-blur-xl shadow-[0_0_60px_rgba(249,115,22,0.15)] hover:shadow-[0_0_80px_rgba(249,115,22,0.25)] transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-5 sm:p-6 md:p-8 lg:p-12 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                            {/* Left: Content */}
                            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
                                <div className="flex items-center gap-3 justify-center md:justify-start">
                                    <div className="p-2.5 sm:p-3 rounded-xl bg-orange-500/20 text-orange-400 shadow-lg shadow-orange-500/20">
                                        <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white">FIRST Robotics</h3>
                                        <p className="text-xs sm:text-sm text-orange-400/80 font-medium">Global STEM Education Leader</p>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    FIRST is a global robotics community preparing young people for the future. Through innovative programs, students develop critical thinking, coding, and
                                    collaboration skills while building real robots and competing at the highest level.
                                </p>

                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    As <span className="text-primary font-semibold">Team Kryptonite #28078</span>, we are proud participants in the
                                    <span className="text-orange-400 font-semibold"> FIRST Tech Challenge (FTC)</span> — a program that
                                    combines the excitement of sport with the rigor of science and technology.
                                </p>

                                <div className="flex justify-center md:justify-start">
                                    <Button
                                        size="lg"
                                        className="h-10 sm:h-12 px-5 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:scale-105"
                                        onClick={() => window.open("https://www.firstinspires.org/robotics/ftc", "_blank")}
                                    >
                                        Learn About FTC
                                        <ExternalLink className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Core Values Grid */}
                            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                                {[
                                    { icon: Users, title: "Teamwork", desc: "Collaboration at its core", color: "from-orange-500 to-orange-400" },
                                    { icon: Lightbulb, title: "Innovation", desc: "Creative problem solving", color: "from-red-500 to-red-400" },
                                    { icon: Code, title: "Programming", desc: "Real-world coding skills", color: "from-primary to-emerald-400" },
                                    { icon: Wrench, title: "Engineering", desc: "Hands-on robot building", color: "from-blue-500 to-blue-400" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-3 sm:p-4 md:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400/30 hover:bg-orange-500/5 transition-all duration-300 group/card"
                                    >
                                        <div className={`inline-flex p-1.5 sm:p-2 md:p-2.5 rounded-lg bg-gradient-to-r ${item.color} mb-2 sm:mb-3 shadow-lg`}>
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        </div>
                                        <h4 className="font-bold text-white text-sm sm:text-base mb-0.5 sm:mb-1 group-hover/card:text-orange-400 transition-colors">{item.title}</h4>
                                        <p className="text-[10px] sm:text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* FIRST Tagline */}
                <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4">
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic">
                        "More than robots. We're building the next generation of <span className="text-orange-400 font-semibold not-italic">innovators, leaders, and changemakers</span>."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FirstEndorsement;
