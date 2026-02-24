"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { } from "lucide-react";

const technologies = [
  { name: "React / Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Go / Golang", icon: "go" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Google Gemini", icon: "googlegemini" },
];

export default function TechStack() {
  return (
    <div id="about" className="relative min-w-screen ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Technical Arsenal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A specialized stack focused on performance, scalability, and 
            human-centric AI integration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300"
            >
              <Image
                src={`https://cdn.simpleicons.org/${tech.icon}`}
                alt={tech.name}
                width={6}
                height={6}
                className="grayscale hover:grayscale-0 transition-all"
              />
              <span className="font-medium text-sm text-gray-800">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}