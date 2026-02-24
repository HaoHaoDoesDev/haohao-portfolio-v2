"use client";
import { motion } from "framer-motion";

export default function AboutMeSegment() {
  return (
    <main className="relative py-28 px-6 text-black">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black">
            About Me
            </h2>

            <p className="text-cyan-600 mt-2 text-sm tracking-wide">
            Get to know me
            </p>
            <p className="mt-10 dark:text-gray-400 text-black leading-relaxed">
            Hi there! I’m Junhao, a Information Technology student and full-stack developer passionate about building clean, 
            scalable, and user-focused applications. I enjoy transforming complex ideas into intuitive digital experiences, 
            whether it’s a modern web platform, a mobile app, or an AI-powered solution.
            </p>
            <p className="mt-6 dark:text-gray-400 text-black leading-relaxed">
            I bring a blend of technical expertise and creativity to every project. I have hands-on experience developing applications using React,
             React Native, TailwindCSS, Zustand, Firebase, Supabase, and PostgreSQL, with a strong focus on modular architecture and maintainable code. 
            I’ve worked on projects involving authentication systems, real-time data handling, role-based routing, AI integrations, and responsive UI systems.
            </p>
            <p className="mt-6 dark:text-gray-400 text-black leading-relaxed">
            Recently, I’ve been building full-stack applications that combine frontend performance with backend reliability, 
            including fitness tracking platforms, internship management portals, and AI-enhanced mobile apps.
            </p>
            <p className="mt-6 dark:text-gray-400 text-black leading-relaxed">
            I’m constantly refining my problem-solving skills through technical challenges and real-world projects, 
            and I enjoy optimizing both user experience and developer experience.
            </p>
            <div className="mt-10">
            <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-8 py-3 rounded-full border font-semibold border-cyan-400 text-cyan-500 hover:bg-cyan-600 hover:text-white hover:font-semibold transition"
                >
                Download Resume
            </motion.button>
            </div>

        </div>
        </motion.div>
    </main>
  );
}
