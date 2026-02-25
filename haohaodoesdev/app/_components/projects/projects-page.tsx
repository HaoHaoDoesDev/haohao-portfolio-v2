"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";

const myProjects = [
  {
    title: "RideWise",
    description: "AI-powered transit assistant using Google Gemini image recognition to provide real-time navigation cues for the visually impaired.",
    tags: ["Computer Vision", "Assistive Tech", "Real-time AI", "Human-Centric Design","Mobile"],
    techStack: ["logos:google-gemini", "simple-icons:yolo", "simple-icons:ngrok", "material-icon-theme:kotlin", "devicon:androidstudio"],
    githubLink: "https://github.com/HaoHaoDoesDev",
    imagePath: "/project-images/ridewise-dash.jpg",
    
  },
  {
    title: "TrackTail",
    description: "🏆 Finalist in NP InnovateDash 2026 | Task Tracking and Productivity Mobile Application for Persons With Intellectual Disability (PWID)",
    tags: ["Social Sustainability", "Microservices", "PWID Support", "Mobile"],
    techStack: ["devicon:reactnative-wordmark", "logos:typescript-icon", "logos:firebase", "logos:google-gemini", "logos:supabase-icon", "devicon:googlecloud", "file-icons:expo", "logos:zod", "devicon:zustand", "skill-icons:docker", "devicon:postgresql", "skill-icons:golang"],
    githubLink: "https://github.com/HaoHaoDoesDev",
    imagePath: "/project-images/tracktail-dash.jpg",
  },
  {
    title: "OCBC Ignite Application",
    description: "🏆 School Representative in OCBC Ignite Hackathon | Automated Testing Tool Full-Stack Application",
    tags: ["Hackathon Finalist", "Quality Assurance", "Full-Stack", "Test Automation"],
    techStack: ["logos:react", "logos:nextjs-icon", "logos:tailwindcss-icon", "skill-icons:docker", "skill-icons:mongodb", "logos:javascript", "material-icon-theme:jest", "devicon:selenium"],
    githubLink: "https://github.com/HaoHaoDoesDev",
    imagePath: "/project-images/project-ocbc.png",
  },
  {
    title: "HSBC Financial Application",
    description: "🏆 PolyFinTech100 API Hackathon 2025 Institute Semi-Finalist | Modern FinTech Full-Stack Application",
    tags: ["FinTech", "API Economy", "State Management", "AI Personalization"],
    techStack: ["logos:react", "logos:nextjs-icon", "logos:tailwindcss-icon", "devicon:postgresql", "logos:google-gemini", "logos:zod", "devicon:zustand"],
    githubLink: "https://github.com/HaoHaoDoesDev",
    imagePath: "/project-images/project-hsbc.png",
  },
  {
    title: "Digital Food Ordering Application",
    description: "A digital food ordering system that incorporates personal AI assistance for food ordering services.",
    tags: ["AI Concierge", "Microservices", "Scalable Backend", "UX Optimization"],
    techStack: ["logos:react", "logos:nextjs-icon", "logos:tailwindcss-icon", "cib:mysql", "material-icon-theme:docker", "vscode-icons:file-type-gemini", "skill-icons:golang"],
    githubLink: "https://github.com/HaoHaoDoesDev",
    imagePath: "/project-images/CNAD_Assignment_Portfolio_Screenshot_ShakeShack.png",
  },
];

export default function ProjectsSegment() {
  return (
    <main id="projects" className="relative py-28 px-6 text-black scroll-mt-24">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black">
            My Projects
            </h2>

            <p className="text-cyan-600 mt-2 text-sm tracking-wide font-semibold">
            WHAT I&rsquo;VE WORKED ON
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
