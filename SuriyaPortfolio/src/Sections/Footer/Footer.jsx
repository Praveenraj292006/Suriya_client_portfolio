import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  MonitorCloud,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const container = useRef();

  useGSAP(() => {
    const q = gsap.utils.selector(container);

    gsap.from(q(".footer-item"), {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom-=100",
      },
    });

    q(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "elastic.out(1,0.4)",
        });
      });
    });
  }, { scope: container });

  const scrollTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <footer
      ref={container}
      className="bg-slate-950 text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Divider */}

        <div className="footer-item h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-16"></div>

        <div className="grid lg:grid-cols-3 gap-14">

          {/* Left */}

          <div className="footer-item">

            <h2 className="text-3xl font-bold">
              Suriya<span className="text-emerald-400">.</span>
            </h2>

            <p className="text-slate-400 mt-6 leading-8 max-w-sm">
              Dedicated Clinical Dietitian passionate about improving
              lives through evidence-based nutrition, preventive healthcare
              and community wellness.
            </p>

          </div>

          {/* Middle */}

          <div className="footer-item">

            <h3 className="font-semibold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} />
                suriyamattthew@gmail.com
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} />
                +91 86829 39901
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                Chennai, India
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="footer-item">

            <h3 className="font-semibold text-xl mb-6">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="magnetic w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-emerald-500 transition"
              >
                <MonitorCloud />
              </a>

              <a
                href="mailto:suriyamattthew@gmail.com"
                className="magnetic w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-emerald-500 transition"
              >
                <Mail />
              </a>

            </div>

            <button
              onClick={scrollTop}
              className="mt-12 flex items-center gap-3 group"
            >
              <span className="text-slate-400 group-hover:text-white transition">
                Back to Top
              </span>

              <div
                className="
                w-10
                h-10
                rounded-full
                bg-emerald-500
                flex
                items-center
                justify-center
                group-hover:-translate-y-1
                transition
              "
              >
                <ArrowUp size={18} />
              </div>
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="footer-item border-t border-slate-800 mt-20 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Suriya R. All Rights Reserved.
          </p>

          <p className="italic text-slate-500 text-sm">
            "Good nutrition is an investment in your future."
          </p>

        </div>

      </div>
    </footer>
  );
}