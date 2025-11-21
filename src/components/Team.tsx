import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

import aadharPhoto from "@/assets/team/aadhar-mandhotra.jpg";
import aditiPhoto from "@/assets/team/aditi-gupta.jpg";
import anayaPhoto from "@/assets/team/anaya-shah.jpg";
import aravPhoto from "@/assets/team/arav-bhasin.jpg";
import ahaanPhoto from "@/assets/team/ahaan-chapparwal.jpg";
import aaryanPhoto from "@/assets/team/aaryan-modi.jpg";
import advayPhoto from "@/assets/team/advay-dhoot.jpg";
import aryanPhoto from "@/assets/team/aryan-vivek.jpg";
import evanyaPhoto from "@/assets/team/evanya-chudgar.jpg";
import kannanPhoto from "@/assets/team/kannan-sanjay.jpg";
import yatharthPhoto from "@/assets/team/yatharth-jain.jpg";
import zeusPhoto from "@/assets/team/zeus-wadia.jpg";
import vedPhoto from "@/assets/team/ved-ramchand.jpg";
import shauryaPhoto from "@/assets/team/shaurya-sule.jpg";
import sakshamPhoto from "@/assets/team/saksham-loonker.jpg";
import rehaanPhoto from "@/assets/team/rehaan-dhandia.jpg";
import naishaPhoto from "@/assets/team/naishaa-bansal.jpg";
import arnavPhoto from "@/assets/team/arnav-gupta.jpg";


const teamMembers = [
  { name: "Aadhar Mandhotra", role: "Team Captain & Driver", initials: "AM", photo: aadharPhoto },
  { name: "Aditi Gupta", role: "Programming", initials: "AG", photo: aditiPhoto },
  { name: "Alaina Goyal", role: "Programming & Outreach", initials: "AG2" },
  { name: "Anaya Shah", role: "Programming", initials: "AS", photo: anayaPhoto },
  { name: "Arav Bhasin", role: "Programming", initials: "AB", photo: aravPhoto },
  { name: "Rehaan Dhandia", role: "Programming", initials: "RD", photo: rehaanPhoto },
  { name: "Ahaan Chapparwal", role: "Programming", initials: "AC", photo: ahaanPhoto },
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
  { name: "Arnav Gupta", role: "Mechanics", initials: "AG", photo: arnavPhoto },
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Users className="w-3 h-3" />
            The Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            A diverse group of students united by a passion for robotics and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
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
