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
    highlights: [
      "100+ Health Camps",
      "Corporate Wellness",
      "Nutrition Counselling",
    ],
  },
  {
    year: "2023 - 2024",
    title: "Health Coach",
    company: "WOOTU Nutrition",
    duration: "1 Year 2 Months",
    highlights: [
      "Personalized Diet Plans",
      "Weight Management",
      "Macro Planning",
    ],
  },
  {
    year: "2023",
    title: "Dietitian",
    company: "Noble Hospital",
    duration: "8 Months",
    highlights: [
      "ICU Nutrition",
      "Patient Assessment",
      "Doctor Collaboration",
    ],
  },
  {
    year: "2021 - 2023",
    title: "Diet Coordinator",
    company: "Kauvery Hospital",
    duration: "2.5 Years",
    highlights: [
      "Therapeutic Diets",
      "Kitchen Coordination",
      "Patient Care",
    ],
  },
];

export default function Experience() {
  const container = useRef();

//  useGSAP(() => {

//     const q = gsap.utils.selector(container);

//     gsap.from(q(".experience-heading"),{
//         opacity:0,
//         y:50,
//         duration:.8,
//         scrollTrigger:{
//             trigger:container.current,
//             start:"top 75%"
//         }
//     });

//     gsap.from(q(".experience-card"),{
//         opacity:0,
//         y:60,
//         scale:.95,
//         stagger:.15,
//         duration:.8,
//         ease:"power3.out",
//         scrollTrigger:{
//             trigger:q(".experience-grid")[0],
//             start:"top 75%"
//         }
//     });

// },{scope:container});

  return (
   <section
    id="experience"
    ref={container}
    className="py-24 bg-[#f8fafc]"
>
    <div className="max-w-7xl mx-auto px-6">

        <div className="experience-heading max-w-3xl">

            <p className="uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                Career Journey
            </p>

            <h2 className="text-5xl font-[Glonto] mt-4">
                Professional Experience
            </h2>

            <p className="mt-6 text-slate-500 leading-8">
                Over five years of experience across hospitals,
                diagnostics and corporate wellness, delivering
                patient-centered nutrition care.
            </p>

        </div>

        <div className="experience-grid grid lg:grid-cols-2 gap-8 mt-16">

            {experience.map((job, index) => (

                <ExperienceCard
                    key={index}
                    {...job}
                />

            ))}

        </div>

    </div>
</section>
  );
}