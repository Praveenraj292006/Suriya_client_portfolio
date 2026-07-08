import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ExperienceCard from "./ExperienceCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const experience = [
  {
    year: "2025 - Present",
    title: "Dietitian Consultant",
    company: "Anderson Diagnostics",
    duration: "1 Year 4 Months",
    description:
      "Conducted 100+ health screening camps, developed corporate wellness programs and provided evidence-based nutrition counselling.",
  },
  {
    year: "2023 - 2024",
    title: "Health Coach",
    company: "WOOTU Nutrition",
    duration: "1 Year 2 Months",
    description:
      "Designed personalized diet plans, weight management strategies and macro-based meal plans.",
  },
  {
    year: "2023",
    title: "Dietitian",
    company: "Noble Hospital",
    duration: "8 Months",
    description:
      "Performed nutritional assessments for ICU and ward patients while coordinating therapeutic diets.",
  },
  {
    year: "2021 - 2023",
    title: "Diet Coordinator",
    company: "Kauvery Hospital",
    duration: "2.5 Years",
    description:
      "Managed hospital diet services and collaborated with doctors and kitchen teams.",
  },
];

export default function Experience() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".experience-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 70%",
        },
      });

      gsap.from(".timeline-card", {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 70%",
        },
      });

      gsap.from(".timeline-dot", {
        scale: 0,
        stagger: 0.2,
        duration: 0.4,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="experience"
      className="bg-gray-200 py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="experience-title  mb-20">
          <p className="text-emerald-500 font-[Poppis] font-medium">
            Career Journey
          </p>

          <h2 className="text-[5vw] mx-6 font-[Glonto] font-semibold mt-2 ">
            Professional Experience
          </h2>
        </div>

        <div className="timeline-wrapper relative">

          <div className="timeline-line hidden lg:block absolute left-1/2 top-0 w-0.75 h-full bg-emerald-400 -translate-x-1/2" />

          {experience.map((item, index) => (
            <ExperienceCard
              key={index}
              {...item}
              left={index % 2 === 0}
            />
          ))}

        </div>
      </div>
    </section>
  );
}