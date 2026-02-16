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
            <h2 className="text-4xl md:text-5xl font-bold">
            About Me
            </h2>

            <p className="text-cyan-600 mt-2 text-sm tracking-wide">
            Get to know me
            </p>
            <p className="mt-10 text-gray-800 leading-relaxed">
            Hi there! I’m Junhao, a passionate Full-Stack Engineer specializing in architecting scalable Go (Golang) microservices and
             high-impact Mobile AI applications. With a focus on creating clean, user-friendly, and visually engaging digital experiences, 
             I love refining UI interactions and making applications feel smooth and intuitive.
            </p>
            <p className="mt-6 text-gray-800 leading-relaxed">
            I bring a blend of technical expertise and creativity to every project, whether I’m designing decoupled backends with Docker and Supabase or 
            building hybrid AI vision systems to enhance accessibility via React Native and the Gemini API.
             My experience spans the entire stack, from solving complex problems like hardware SDK reverse-engineering to turning concepts into polished,
              real-world solutions that drive results.
            </p>
            <p className="mt-6 text-gray-800 leading-relaxed">
            I’m always eager to learn and driven by a curiosity for new technologies. Let’s work together to bridge complex technical infrastructure with seamless,
             user-centric experiences. Get in touch, and let’s start turning your vision into a reality!
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
