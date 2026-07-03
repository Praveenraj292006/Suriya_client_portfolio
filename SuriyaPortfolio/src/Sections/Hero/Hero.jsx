import React from 'react'
import CVbutton from '../../Components/CVbutton/CVbutton'
import dietician from '../../assets/Suriya_photo.png'
import apple from '../../assets/Green-Apple-PNG-File.png'
import suriya from '../../assets/Suriya_hero_img.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.from(".hero_text", {
        opacity: 0,
        x: 100,
        stagger: { amount: 1 },
        duration: 1,
        ease: "power1.inOut"
      });

      gsap.from(".img", {
        opacity: 0,
        duration: 1,
        x: -120,
      });
    });

    // Mobile/tablet: vertical entrance instead, feels natural when stacked
    mm.add("(max-width: 1023px)", () => {
      gsap.from(".hero_text", {
        opacity: 0,
        y: 40,
        stagger: { amount: 0.6 },
        duration: 0.9,
        ease: "power1.inOut"
      });

      gsap.from(".img", {
        opacity: 0,
        duration: 1,
        y: -60,
      });
    });

    return () => mm.revert();
  });

  return (
    <div className='flex flex-col lg:flex-row overflow-hidden'>
      {/* Left side */}
      <div className="left w-full lg:w-1/2 max-h-screen lg:h-screen flex flex-col items-center justify-center  lg:pt-0">
        <div className="badge flex flex-col gap-5 items-center lg:items-start w-full">
          <div className='ml-0 lg:ml-14 text-4xl lg:text-5xl hero_text  lg:text-left'>Hi!</div>
          <div className='mx-5 lg:ml-14 lg:mr-0 text-2xl text-[8vw] lg:text-[3rem] font-[Glonto] hero_text  lg:text-left leading-snug'>
            Evidence-Based <span className='text-cyan-400 gap-0'>Nutrition</span> for a <br className="hidden sm:block" /><span className='text-cyan-400 gap-0'>Healthier</span> Tomorrow.
          </div>
          <div className="desc px-6 sm:px-10 lg:px-15">
            <p className='hero_text text-xl lg:text-left'>
              Supporting healthier communities with personalized nutrition strategies, preventive care, and expert dietary guidance.
            </p>
          </div>
          <div className='px-10'><CVbutton /></div>
        </div>
      </div>

      {/* Right side */}
      <div className="group right w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">

          {/* Blob */}
          <div
            className="absolute z-9 top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-64 h-72 sm:w-96 sm:h-104 lg:w-xl lg:h-144
            bg-linear-to-br from-green-400 via-emerald-400 to-cyan-400
            group-hover:from-yellow-600 group-hover:via-orange-600 group-hover:to-red-400
            transition duration-300 ease-in-out
            rounded-[58%_75%_62%_54%/65%_54%_41%_56%]
            blur-s opacity-90
            animate-pulse bg-clip-content border-4 p-3 border-dashed border-cyan-400"
          ></div>

          {/* Main Image */}
          <div className="relative z-10 flex justify-center w-full">
            <img
              className="img  w-[60vw] lg:w-[40.3vw] relative lg:ml-8"
              src={suriya}
              alt="Dietician"
            />
          </div>

          {/* Apple */}
          <img
            className="w-16 sm:w-20 lg:w-[8vw] absolute right-4 sm:right-8 lg:right-10 bottom-4 sm:bottom-5 z-20"
            src={apple}
            alt="Apple"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero