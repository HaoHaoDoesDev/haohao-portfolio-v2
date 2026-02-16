"use client";
import { motion } from "framer-motion";
import OrbAvatar from "@/components/orb-avatar";

export default function WelcomeMessage() {
  return (
    <main  className="flex flex-col items-center justify-center text-center px-6 mt-16">
      <OrbAvatar/>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          HaoHaoDoesDev
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-cyan-600 text-xl mt-4"
        >
          Your Friendly Neighbourhood Developer 💻
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-gray-400 mt-6 leading-relaxed"
        >
          Full-Stack Engineer with a specialized edge in architecting scalable Go (Golang) microservices and high-impact Mobile & Web AI applications
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 px-8 py-3 rounded-full border font-semibold border-cyan-400 text-cyan-500 hover:bg-cyan-600 hover:text-white hover:font-semibold transition"
        >
          Contact Me
        </motion.button>
    </main>
  );
}
