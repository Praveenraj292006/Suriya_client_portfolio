import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Expand } from "lucide-react";
import gallery1 from "../../assets/Gallery/gallery_1.jpg";
import gallery2 from "../../assets/Gallery/gallery_2.jpg";
import gallery3 from "../../assets/Gallery/gallery_3.jpg";
import gallery4 from "../../assets/Gallery/gallery_4.jpg";
import gallery5 from "../../assets/Gallery/gallery_5.jpg";
import gallery6 from "../../assets/Gallery/gallery_6.jpg";
import gallery7 from "../../assets/Gallery/gallery_7.jpg";
import gallery8 from "../../assets/Gallery/gallery_8.jpg";
import gallery9 from "../../assets/Gallery/gallery_9.jpg";
import gallery10 from "../../assets/Gallery/gallery_10.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const images = [
  {
    src: gallery1,
    title: "Corporate Wellness Camp",
    span: "row-span-2",
  },
  {
    src: gallery2,
    title: "Nutrition Counselling",
    span: "row-span-1",
  },
  {
    src: gallery3,
    title: "Health Screening",
    span: "row-span-1",
  },
  {
    src: gallery4,
    title: "BMI Assessment",
    span: "row-span-2",
  },
  {
    src: gallery5,
    title: "Awareness Session",
    span: "row-span-1",
  },
  {
    src: gallery6,
    title: "Community Outreach",
    span: "row-span-2",
  },
  {
    src: gallery7,
    title: "Community Outreach",
    span: "row-span-2",
  },
  {
    src: gallery8,
    title: "Community Outreach",
    span: "row-span-2",
  },
  {
    src: gallery9,
    title: "Community Outreach",
    span: "row-span-2",
  },
    {
    src: gallery10,
    title: "Community Outreach",
    span: "row-span-2",
  },
];

export default function Gallery() {
  const container = useRef();

  useGSAP(() => {
    const q = gsap.utils.selector(container);

    gsap.from(q(".gallery-title"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });

    gsap.from(q(".gallery-item"), {
      opacity: 0,
      y: 80,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".gallery-grid")[0],
        start: "top 75%",
      },
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="py-28 bg-[#f8fafc]"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="gallery-title max-w-3xl mb-16">

          <p className="text-emerald-500 uppercase tracking-[0.2em] font-semibold">
            Camp Highlights
          </p>

          <h2 className="text-5xl font-[Glonto] mt-4">
            Moments From The Field
          </h2>

          <p className="text-slate-500 mt-6 leading-8">
            A visual journey through health camps,
            nutrition awareness programs, and
            community wellness initiatives.
          </p>

        </div>

        <div
          className="
          gallery-grid
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          auto-rows-[220px]
          gap-5
        "
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`
                gallery-item
                group
                relative
                overflow-hidden
                rounded-[28px]
                ${image.span}
              `}
            >
              <img
                src={image.src}
                alt={image.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  flex
                  items-center
                  justify-between
                  opacity-0
                  translate-y-4
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              >
                <div>
                  <h3 className="text-white font-semibold">
                    {image.title}
                  </h3>
                </div>

                <button
                  className="
                    h-11
                    w-11
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Expand className="text-white" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}