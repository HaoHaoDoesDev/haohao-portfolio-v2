"use client";
import { motion } from "framer-motion";
import OrbAvatar from "@/components/orb-avatar";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function WelcomeMessage() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/HaoHaoDoesDev", 
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/junhao-ong/",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/junha_ohao",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:ongjunhao2609@gmail.com",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 min-h-screen">
      <OrbAvatar />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold tracking-tight font-funnel"
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
        className="max-w-2xl dark:text-gray-400 text-black mt-6 leading-relaxed"
      >
        Full-Stack Engineer with a specialized edge in architecting scalable Go (Golang) microservices and high-impact Mobile & Web AI applications
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex items-center justify-center gap-4 sm:gap-6"
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.name === "Email" ? "_self" : "_blank"}
            rel={social.name === "Email" ? "" : "noopener noreferrer"}
            aria-label={social.name}
            className="p-3 rounded-full border border-cyan-400/70 text-cyan-600 dark:text-cyan-500 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          >
            {social.icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
}