"use client";
import { NavbarDemo } from "./_components/navbar";
import WelcomeMessage from "./_components/welcome-message";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#ffffff] text-black overflow-hidden">
      <div className="pt-4">
        <NavbarDemo/>
      </div>
      <WelcomeMessage/>
    </main>
  );
}
