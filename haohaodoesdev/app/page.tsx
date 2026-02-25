"use client";
import { NavbarDemo } from "./_components/navbar";
import WelcomeMessage from "./_components/welcome-message";
import AboutMeSegment from "./_components/about-me";
import TechnicalSkills from "./_components/tech-stack/technical-skills-segment";
import SoftSkills from "./_components/tech-stack/soft-skills";
import Squares from "@/components/grid-background";
import ProjectsSegment from "./_components/projects/projects-page";

export default function Home() {
  return (
    <main className="relative bg-white text-black dark:bg-black dark:text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Squares 
          direction="diagonal" 
          speed={0} 
          squareSize={40} 
        />
      </div>
      <div className="relative z-10">
        <div className="pt-4 min-h-screen">
          <NavbarDemo />
          <WelcomeMessage />
        </div>
        <AboutMeSegment />
        <TechnicalSkills />
        <SoftSkills />
        <ProjectsSegment/>
      </div>
      
    </main>
  );
}