import React from 'react'
import TiltedCard from '../../Components/ImageCard/Titledcard'
import cardimg from '../../assets/suriya_abt.png'
import Viweprojects from '../../Components/Button/Viweprojects'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div
        className="
          relative
          flex
          flex-col
          lg:flex-row
          justify-center
          items-center
          overflow-hidden
          shadow-xl
          shadow-gray-200
          bg-teal-200
          rounded-2xl
          m-4
          lg:m-8
          w-auto
          h-auto
          lg:w-screen
          lg:h-[80vh]
          py-10
        "
      >
        {/* Left Side */}
        <div className="h-full flex items-center justify-center mb-10 lg:mb-0">
          <div className="m-4 lg:w-full">
            <TiltedCard
              imageSrc={cardimg}
              altText="Dietician suriya"
              captionText="Suriya - Dietician"
              containerHeight="500px"
              containerWidth="500px"
              imageHeight="550px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="tilted-card-demo-text sm:mt-8 lg:text-lg font-[Glonto] bg-green-300 rounded-2xl p-4 lg:p-2 lg:m-6">
                  Suriya - Dietician
                </p>
              }
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full ">
          <div className="w-full ">
            <p className="text-[12vw] sm:text-[9vw] lg:text-[6vw] font-[Anokha] px-6">
              I am SURIYA
            </p>

            <div className="flex flex-row gap-4 justify-between px-6">
              <p className="text-sm lg:text-[1.5vw] font-[Poppis]">
                DIETICIAN
              </p>

              <p className="text-sm lg:text-[1.5vw] font-[Poppis]">
                5+ years of experience
              </p>
            </div>

            <div className="p-6 lg:text-lg font-[Anokha] leading-6 tracking-wide">
              <p>
                I am a passionate Clinical Dietitian dedicated to improving
                lives through evidence-based nutrition and personalized dietary
                care. With hands-on experience in hospitals, diagnostic centers,
                and corporate wellness programs, I specialize in nutrition
                assessment, therapeutic diet planning, lifestyle modification,
                and patient counseling. My goal is to empower individuals to
                achieve sustainable health by combining scientific nutrition
                with compassionate, patient-centered care. I believe that every
                healthy choice contributes to a healthier future, and I strive
                to make nutrition simple, practical, and impactful for every
                individual I serve.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:absolute">
                <Viweprojects
                  text="Take look at my works"
                  color="indigo"
                />

                <Viweprojects
                  text="Download my CV"
                  color="green"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About