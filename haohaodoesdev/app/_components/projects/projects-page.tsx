"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";

const myProjects = [
  {
    title: "RideWise",
    description: "AI-powered transit assistant using Google Gemini image recognition to provide real-time navigation cues for the visually impaired.",
    tags: ["AI", "Accessibility", "Mobile"],
    techStack: ["logos:react", "logos:google-gemini", "logos:go", "logos:tailwindcss-icon"],
    githubLink: "https://github.com/yourhandle/ridewise",
  },
  {
    title: "TrackTail",
    description: "A gamified task-tracking application designed to assist individuals with intellectual disabilities in managing daily routines.",
    tags: ["Gamification", "UX Design", "AI", "Accessibility", "Mobile"],
    techStack: ["logos:react", "logos:typescript-icon", "logos:framer", "logos:firebase"],
    githubLink: "https://github.com/yourhandle/tracktail",
  },
  {
    title: "Ligma",
    description: "A gamified task-tracking application designed to assist individuals with intellectual disabilities in managing daily routines.",
    tags: ["Gamification", "UX Design"],
    techStack: ["logos:react", "logos:typescript-icon", "logos:framer", "logos:firebase"],
    githubLink: "https://github.com/yourhandle/tracktail",
  }
];

export default function ProjectsSegment() {
  return (
    <main id="about" className="relative py-28 px-6 text-black scroll-mt-24">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black">
            Featured Projects
            </h2>

            <p className="text-cyan-600 mt-2 text-sm tracking-wide font-semibold">
            MY WORKS
            </p>
            <div className="mt-8 flex-col space-y-4">
                {myProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
        </motion.div>
    </main>
  );
}
