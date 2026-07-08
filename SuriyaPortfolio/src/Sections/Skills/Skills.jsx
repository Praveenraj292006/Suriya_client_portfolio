import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  HeartPulse,
  ClipboardList,
  Users,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const skillGroups = [
  {
    title: "Clinical Nutrition",
    icon: HeartPulse,
    skills: [
      "Medical Nutrition Therapy",
      "Clinical Nutrition",
      "Therapeutic Diet Planning",
      "Disease Management",
      "ICU Nutrition",
      "Patient Assessment",
    ],
  },
  {
    title: "Nutrition Assessment",
    icon: ClipboardList,
    skills: [
      "BMI Analysis",
      "BCA Analysis",
      "Diet Planning",
      "Nutrition Screening",
      "Meal Planning",
      "Lifestyle Modification",
    ],
  },
  {
    title: "Patient Care",
    icon: Users,
    skills: [
      "Diet Counselling",
      "Patient Education",
      "Communication",
      "Case Coordination",
      "Health Coaching",
      "Follow-up Care",
    ],
  },
  {
    title: "Corporate Wellness",
    icon: BarChart3,
    skills: [
      "Health Screening Camps",
      "Corporate Wellness",
      "Nutrition Workshops",
      "Employee Wellness",
      "Preventive Healthcare",
      "Public Awareness",
    ],
  },
];

export default function Skills() {
  
  const container = useRef();
  const headingRef = useRef();
  const gridRef = useRef();

// useGSAP(() => {

//   const q = gsap.utils.selector(container);

//   gsap.from(q(".skills-heading"), {
//     opacity: 0,
//     y: 50,
//     duration: 0.8,
//     scrollTrigger: {
//       trigger: headingRef.current,
//       start: "top 80%",
//     },
//   });

//   gsap.from(q(".skill-card"), {
//     opacity: 0,
//     y: 60,
//     stagger: 0.15,
//     duration: 0.8,
//     scrollTrigger: {
//       trigger: gridRef.current,
//       start: "top 80%",
//     },
//   });

// }, { scope: container });

  return (
    <section
      ref={container}
      id="skills"
      className="skills-section py-28 bg-[#F8FFFC]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div ref={headingRef} className="skills-heading text-center max-w-3xl mx-auto">

          <p className="text-emerald-500 font-semibold tracking-wide uppercase">
            Skills
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Clinical Skills &
            <span className="text-emerald-500"> Expertise</span>
          </h2>

          <p className="text-slate-500 mt-6 text-lg leading-8">
            Combining clinical experience with evidence-based nutrition
            practices to deliver personalized care and improve long-term
            health outcomes.
          </p>

        </div>

        {/* Cards */}

        <div className="skills-grid grid md:grid-cols-2 gap-8 mt-20">

          {skillGroups.map((group, index) => {

            const Icon = group.icon;

            return (
              <div
                ref={gridRef}
                key={index}
                className="skill-card group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-5 mb-8">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-emerald-100
                    flex
                    items-center
                    justify-center
                    group-hover:bg-emerald-500
                    transition-all
                    duration-300
                  "
                  >
                    <Icon
                      size={30}
                      className="text-emerald-600 group-hover:text-white transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900">
                    {group.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-emerald-50
                      text-emerald-700
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      hover:bg-emerald-500
                      hover:text-white
                      cursor-default
                    "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {[
            ["100+", "Health Camps"],
            ["5+", "Years Experience"],
            ["1000+", "Patients Guided"],
            ["4+", "Healthcare Organizations"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-emerald-500">
                {number}
              </h3>

              <p className="text-slate-500 mt-3">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}