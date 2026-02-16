"use client";
import { NavbarDemo } from "./_components/navbar";
import WelcomeMessage from "./_components/welcome-message";
import AboutMeSegment from "./_components/about-me";
export default function Home() {
  return (
    <main className="relative bg-[#ffffff] text-black overflow-hidden">
      <div className="pt-4 min-h-screen">
        <NavbarDemo/>
        <WelcomeMessage/>
      </div>
      <AboutMeSegment/>
    </main>
  );
}
