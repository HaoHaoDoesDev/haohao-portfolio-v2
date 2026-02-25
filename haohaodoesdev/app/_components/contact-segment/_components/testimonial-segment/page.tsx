"use client";
import { AnimatedTestimonials } from "@/components/animated-testimonials";

export default function TestimonialContent() {
  const testimonials = [
    {
      quote:
        "Supervising Junhao was a pleasure. He started with little experience but quickly became a confident developer through his determination and curiosity. He showed strong independence, professionalism, and teamwork throughout the internship. Any team would be fortunate to have him.",
      name: "Julien Heng",
      designation: "Front-End Developer at Amber Creative",
      src: "/testimonial/testimonial-pic-1.jpg",
    },
    {
      quote:
        "I worked with Junhao during his internship at Amber Creative. He learned quickly, wrote clean frontend code, and took strong ownership of his work. His attention to detail and initiative made a positive impact on our UI. I highly recommend him for future software engineering roles.",
      name: "Nelson Lee",
      designation: "Software Developer at Amber Creative",
      src: "/testimonial/testimonial-2.jpg",
    },
  ];
  return (
    <main className="relative w-full mb-8 pt-8 mt-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black">
          Testimonials
        </h2>
        <p className="text-cyan-500 mt-2 text-sm tracking-wide font-semibold">
          WORDS FROM MY PAST COLLEAGUES
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </main>
  );
}
