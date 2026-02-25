"use client";
import { NavbarDemo } from "./_components/navbar";
import WelcomeMessage from "./_components/welcome-message";
import AboutMeSegment from "./_components/about-me";
import TechnicalSkills from "./_components/tech-stack/technical-skills-segment";
import SoftSkills from "./_components/tech-stack/soft-skills";
export default function Home() {
  return (
    <main className="relative bg-[#ffffff] text-black dark:bg-black dark:text-white overflow-hidden">
      <div className="pt-4 min-h-screen">
        <NavbarDemo/>
        <WelcomeMessage/>
      </div>
      <AboutMeSegment/>
      <TechnicalSkills/>
      <SoftSkills/>
    </main>
  );
}
