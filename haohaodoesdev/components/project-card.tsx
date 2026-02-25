"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  techStack,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-6 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
    >
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 shrink-0">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-6">
        {description}
      </p>
      <div className="mt-auto flex items-center gap-3">
        {techStack.map((icon) => (
          <Icon 
            key={icon} 
            icon={icon} 
            width="20" 
            height="20" 
            className="grayscale group-hover:grayscale-0 transition-all duration-300" 
          />
        ))}
      </div>
    </motion.div>
  );
}