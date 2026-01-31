import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

import aadharPhoto from "@/assets/team/AadharKr.jpeg";
import aditiPhoto from "@/assets/team/AditiKr.jpeg";
import anayaPhoto from "@/assets/team/AnayaKr.jpeg";
import aravPhoto from "@/assets/team/AravKr.jpeg";
import aaryanPhoto from "@/assets/team/AryanMKr.jpeg";
import advayPhoto from "@/assets/team/AdvayKr.jpeg";
import aryanPhoto from "@/assets/team/AryanVKr.jpg";
import evanyaPhoto from "@/assets/team/EvanyaKr.jpeg";
import kannanPhoto from "@/assets/team/KannanKr.jpeg";
import yatharthPhoto from "@/assets/team/YatharthKr.jpeg";
import zeusPhoto from "@/assets/team/ZeusKr.jpeg";
import vedPhoto from "@/assets/team/VedKr.jpeg";
import shauryaPhoto from "@/assets/team/ShauryaKr.jpeg";
import sakshamPhoto from "@/assets/team/SakshamKr.jpeg";
import rehaanPhoto from "@/assets/team/RehaanKr.jpeg";
import naishaPhoto from "@/assets/team/NaishaaKr.jpg";
import alainaPhoto from "@/assets/team/AlainaKr.jpeg";


const teamMembers = [
  { name: "Aadhar Mandhotra", role: "Team Captain & Driver", initials: "AM", photo: aadharPhoto },
  { name: "Aditi Gupta", role: "Programming", initials: "AG", photo: aditiPhoto },
  { name: "Alaina Goyal", role: "Programming & Outreach", initials: "AG2", photo: alainaPhoto },
  { name: "Anaya Shah", role: "Programming", initials: "AS", photo: anayaPhoto },
  { name: "Arav Bhasin", role: "Programming", initials: "AB", photo: aravPhoto },
  { name: "Rehaan Dhandia", role: "Programming", initials: "RD", photo: rehaanPhoto },
  { name: "Ahaan Chapparwal", role: "Programming", initials: "AC" },
  { name: "Ved Ramchand", role: "Programming", initials: "VR", photo: vedPhoto },
  { name: "Aaryan Modi", role: "Mechanics", initials: "AM2", photo: aaryanPhoto },
  { name: "Advay Dhoot", role: "Mechanics", initials: "AD", photo: advayPhoto },
  { name: "Aryan Vivek", role: "Mechanics", initials: "AV", photo: aryanPhoto },
  { name: "Evanya Chudgar", role: "Mechanics & Outreach", initials: "EC", photo: evanyaPhoto },
  { name: "Kannan Sanjay", role: "Mechanics", initials: "KS", photo: kannanPhoto },
  { name: "Naishaa Bansal", role: "Mechanics & Outreach", initials: "NB", photo: naishaPhoto },
  { name: "Saksham Loonker", role: "Mechanics & Scouting", initials: "SL", photo: sakshamPhoto },
  { name: "Yatharth Jain", role: "Mechanics", initials: "YJ", photo: yatharthPhoto },
  { name: "Zeus Wadia", role: "Mechanics", initials: "ZW", photo: zeusPhoto },
  { name: "Shaurya Sule", role: "Scouting Head & Mechanics Head", initials: "SS", photo: shauryaPhoto },
  { name: "Arnav Gupta", role: "Mechanics", initials: "AG" },
];

const Team = () => {
  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 mb-3 sm:mb-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Users className="w-3 h-3" />
            The Team
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light px-2">
            A diverse group of students united by a passion for robotics and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group relative overflow-hidden border border-white/5 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] hover:-translate-y-2">
              <div className="aspect-square relative overflow-hidden bg-secondary/50">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary/20 font-bold text-3xl bg-secondary/50 group-hover:bg-secondary/70 transition-colors">
                    {member.initials}
                  </div>
                )}
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Social/Contact reveal could go here, but keeping it clean as requested */}
              </div>

              <CardContent className="p-4 text-center relative z-10 bg-card group-hover:bg-card/90 transition-colors">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <h3 className="font-semibold text-white text-sm mb-1 truncate group-hover:text-primary transition-colors duration-300" title={member.name}>
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide truncate group-hover:text-white/90 transition-colors duration-300" title={member.role}>
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
