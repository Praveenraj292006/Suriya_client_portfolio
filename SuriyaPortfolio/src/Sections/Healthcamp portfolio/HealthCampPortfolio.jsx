import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileSpreadsheet,
  Activity,
  Users,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const documents = [
  {
    title: "Corporate Health Camp Summary",
    description:
      "Comprehensive documentation of health camps conducted across multiple organizations including participant screening, nutritional assessment, counselling and preventive healthcare activities.",
    sheets: "5 Worksheets",
    size: "2025",
    file: "/camp-data.xlsx",
  },
  {
    title: "Clinical Diagnosis Database",
    description:
      "Detailed health screening database containing diagnosis summaries, health observations, BMI analysis and nutrition counselling records.",
    sheets: "22 Worksheets",
    size: "Patient Records",
    file: "/abcd-camp.xlsx",
  },
];

export default function HealthCampPortfolio() {
  const container = useRef();

//   useGSAP(
//     () => {
//       gsap.from(".camp-heading", {
//         opacity: 0,
//         y: 40,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: ".camp-section",
//           start: "top 80%",
//         },
//       });

//       gsap.from(".stat-card", {
//         opacity: 0,
//         y: 40,
//         stagger: 0.15,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".stats-grid",
//           start: "top 80%",
//         },
//       });

//       gsap.from(".doc-card", {
//         opacity: 0,
//         y: 60,
//         stagger: 0.2,
//         duration: 0.9,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".docs-grid",
//           start: "top 75%",
//         },
//       });
//     },
//     { scope: container }
//   );

  return (
    <section
      ref={container}
      className="camp-section py-28 bg-[#F8FFFC]"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="camp-heading text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-widest text-emerald-500 font-semibold">
            Health Camp Portfolio
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Real-World Clinical
            <span className="text-emerald-500"> Impact</span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-8">
            A collection of health camp documentation, nutrition counselling
            records and clinical screening reports demonstrating practical
            experience in preventive healthcare and patient wellness.
          </p>

        </div>

        {/* Statistics */}

        <div className="stats-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          <div className="stat-card rounded-3xl border p-8 text-center">
            <Activity className="mx-auto text-emerald-500" size={36} />
            <h3 className="text-5xl font-bold mt-5">100+</h3>
            <p className="text-slate-500 mt-2">Health Camps</p>
          </div>

          <div className="stat-card rounded-3xl border p-8 text-center">
            <Users className="mx-auto text-emerald-500" size={36} />
            <h3 className="text-5xl font-bold mt-5">1000+</h3>
            <p className="text-slate-500 mt-2">Patients Screened</p>
          </div>

          <div className="stat-card rounded-3xl border p-8 text-center">
            <HeartPulse className="mx-auto text-emerald-500" size={36} />
            <h3 className="text-5xl font-bold mt-5">15+</h3>
            <p className="text-slate-500 mt-2">Health Conditions</p>
          </div>

          <div className="stat-card rounded-3xl border p-8 text-center">
            <FileSpreadsheet
              className="mx-auto text-emerald-500"
              size={36}
            />
            <h3 className="text-5xl font-bold mt-5">2</h3>
            <p className="text-slate-500 mt-2">Clinical Workbooks</p>
          </div>

        </div>

        {/* Documentation */}

        <div className="docs-grid grid lg:grid-cols-2 gap-8 mt-20">

          {documents.map((doc, index) => (
            <div
              key={index}
              className="doc-card rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-start">

                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <FileSpreadsheet
                    className="text-emerald-600"
                    size={28}
                  />
                </div>

                <span className="text-sm bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
                  Excel Workbook
                </span>

              </div>

              <h3 className="text-2xl font-semibold mt-8">
                {doc.title}
              </h3>

              <p className="text-slate-500 mt-4 leading-8">
                {doc.description}
              </p>

              <div className="flex gap-6 mt-6 text-sm text-slate-500">
                <span>{doc.sheets}</span>
                <span>{doc.size}</span>
              </div>

              <div className="flex gap-4 mt-10">

                <button
                  className="px-6 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition"
                >
                  Preview
                </button>

                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border hover:bg-slate-50 transition"
                >
                  Open Workbook
                  <ArrowUpRight size={18} />
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}