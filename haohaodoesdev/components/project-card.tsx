"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  imagePath?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  techStack,
  githubLink,
  liveLink,
  imagePath,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-6 transition-all hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
    >
      <AnimatePresence>
        {isHovered && imagePath && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            <div className="absolute inset-0 bg-black/70 z-10" />
            <Image
              src={imagePath}
              alt={title}
              fill 
              className="object-cover"
              priority={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-30 flex items-start justify-between mb-4 gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 ${
                isHovered 
                  ? 'bg-white/20 text-white backdrop-blur-md' 
                  : 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 shrink-0">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={`${isHovered ? 'text-white' : 'text-gray-400'} hover:scale-110 transition-all`}>
              <Github size={20} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={`${isHovered ? 'text-cyan-400' : 'text-gray-400'} hover:scale-110 transition-all`}>
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="relative z-30">
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black dark:text-white group-hover:text-cyan-500'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${isHovered ? 'text-gray-200' : 'text-gray-600 dark:text-neutral-400'}`}>
          {description}
        </p>
      </div>
      <div className="relative z-30 mt-auto flex items-center gap-3">
        {techStack.map((icon) => (
          <Icon 
            key={icon} 
            icon={icon} 
            width="20" 
            height="20" 
            className={`transition-all duration-300 ${isHovered ? 'brightness-200' : 'grayscale group-hover:grayscale-0'}`} 
          />
        ))}
      </div>
    </motion.div>
  );
}