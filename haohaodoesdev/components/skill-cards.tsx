"use client";

import { Icon } from "@iconify/react";

export default function SkillsCards({ skills = defaultSkills }) {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 flex flex-wrap gap-6 justify-center">
      {skills.map((s) => (
        <article
          key={s.id ?? s.name}
          className="flex items-center gap-3 bg-black dark:bg-white/30 hover:border-cyan-400 backdrop-blur rounded-md p-4 shadow-md"
          aria-label={`${s.name} skill card`}
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white">
            {s.icon ? (
              <Icon icon={s.icon} className="w-8 h-8 text-black" />
            ) : (
              <span className="text-lg font-semibold text-black">
                {s.name[0]}
              </span>
            )}
          </div>
          <h3 className="text-base font-semibold font-funnel text-white truncate">
            {s.name}
          </h3>
        </article>
      ))}
    </section>
  );
}

const defaultSkills = [
  { id: 1, name: "React", icon: "logos:react" },
  { id: 2, name: "TypeScript", icon: "logos:typescript-icon" },
  { id: 3, name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { id: 4, name: "Node.js", icon: "logos:nodejs-icon" },
];
