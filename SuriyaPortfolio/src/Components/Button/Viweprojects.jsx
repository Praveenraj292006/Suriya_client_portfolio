import React, { useRef } from "react";
import { gsap } from "gsap";

const ViewProjects = (props) => {
  const cardRef = useRef(null);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      y: -15,
      scale: 1.08,
      rotate: -3,
      duration: 0.4,
      ease: "power3.out",
      boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "power3.out",
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    });
  };

  return (
    <div className="mx-2">
      <div
        ref={cardRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`w-[10vw] h-[30vh] p-1 rounded-4xl m-5 bg-${props.color}-800 cursor-pointer`}
      >
        <h2 className="mt-6 p-3 text-[1.3rem] text-white">
          {props.text}
        </h2>
      </div>
    </div>
  );
};

export default ViewProjects;