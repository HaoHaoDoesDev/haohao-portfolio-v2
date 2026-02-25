"use client";
import SoftSkillsCards from "@/components/soft-skill-card";

const softSkills = [
  {
    id: 1,
    name: "Leadership",
    sub: "Ability to guide, inspire, and influence others towards achieving common goals",
    image: "/tech-stack-images/leadership-image.png",
  },
  {
    id: 2,
    name: "Communication",
    sub: "Ability to convey information, ideas, and emotions to others",
    image: "/tech-stack-images/communication-image.png",
  },
  {
    id: 3,
    name: "Teamwork",
    sub: "Ability to work effectively with others in a team",
    image: "/tech-stack-images/teamwork-image.png",
  },
  {
    id: 4,
    name: "Time Management",
    sub: "Ability to Prioritize tasks, allocate time effectively, and meet deadlines",
    image: "/tech-stack-images/time-management-image.png",
  },
  {
    id: 5,
    name: "Problem Solving",
    sub: "Ability to identify, analyze, and resolve challenges or difficulties",
    image: "/tech-stack-images/problem-solving.png",
  },
  {
    id: 6,
    name: "Adaptability",
    sub: "Ability to change my actions, approach, or direction to manage any new situation",
    image: "/tech-stack-images/adaptability-image.png",
  },
];

export default function SoftSkills() {
  return (
    <div className="pb-8">
      <div className="pt-20 pb-8">
        <div className="font-sans text-center text-5xl text-black dark:text-white font-extrabold">
          Generic
        </div>
        <div className="font-funnel text-center text-sm text-cyan-500 font-semibold mt-2">
          MY PERSONAL QUALITIES
        </div>
      </div>
      <SoftSkillsCards skills={softSkills} />
    </div>
  );
}
