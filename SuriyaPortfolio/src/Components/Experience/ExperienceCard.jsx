import { useRef } from "react";
import gsap from "gsap";

export default function ExperienceCard({
  left,
  year,
  title,
  company,
  duration,
  description,
}) {
  const card = useRef();

  const enter = () => {
    gsap.to(card.current, {
      y: -10,
      scale: 1.02,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const leave = () => {
    gsap.to(card.current, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <div
      className={`timeline-card relative flex mb-24 items-center
      ${left ? "lg:justify-start" : "lg:justify-end"}
      justify-start`}
    >
      <div
        ref={card}
        onMouseEnter={enter}
        onMouseLeave={leave}
        className={`w-full lg:w-[44%]
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-7
        shadow-sm
        cursor-pointer
        ${
          left
            ? "lg:mr-14"
            : "lg:ml-14"
        }`}
      >
        <p className="text-emerald-500 font-semibold">
          {year}
        </p>

        <h3 className="text-2xl font-[Anokha]  mt-2">
          {title}
        </h3>

        <p className="text-gray-500 mt-1">
          {company}
        </p>

        <p className="text-sm text-emerald-600 mt-2">
          {duration}
        </p>

        <p className="text-gray-600 leading-7 mt-5">
          {description}
        </p>
      </div>

      <div
        className="timeline-dot hidden lg:flex absolute left-1/2
        -translate-x-1/2
        h-5
        w-5
        rounded-full
        bg-emerald-500
        border-4
        border-white
        shadow-lg"
      />
    </div>
  );
}