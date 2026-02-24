"use client";

import React from "react";
import Image from "next/image";

interface SoftSkill {
  id?: string | number;
  name: string;
  sub?: string;
  image: string; // URL or imported image
}

interface SoftSkillsCardsProps {
  skills: SoftSkill[];
}

export default function SoftSkillsCards({ skills }: SoftSkillsCardsProps) {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((s) => (
        <article
          key={s.id ?? s.name}
          className="flex items-center gap-4 bg-black backdrop-blur rounded-md p-4 shadow-md dark:bg-white/30 "
        >
          {/* Skill Image */}
          <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden grid place-items-center">
            <Image
              src={s.image}
              alt={s.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Skill text */}
          <div>
            <h3 className="text-base font-semibold text-white dark:text-white truncate">
              {s.name}
            </h3>
            {s.sub && <p className="text-sm text-gray-400 dark:text-white">{s.sub}</p>}
          </div>
        </article>
      ))}
    </section>
  );
}
