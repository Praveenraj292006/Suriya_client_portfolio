import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Phone,
  Mail,
  MapPin,
  MonitorCloud ,
  Download,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const container = useRef();

  useGSAP(() => {
    const q = gsap.utils.selector(container);

    gsap.from(q(".contact-title"), {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

    gsap.from(q(".contact-card"), {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      id="contact"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="contact-title text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.2em] text-emerald-400 font-semibold">
            Contact
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Whether you're looking for corporate wellness programs,
            nutrition consultation, or healthcare collaboration,
            I'm always open to meaningful conversations.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          <div className="contact-card bg-slate-800 rounded-3xl p-6">
            <Phone className="text-emerald-400 mb-5" size={32} />
            <h3 className="font-semibold text-xl">Phone</h3>
            <p className="mt-3 text-slate-300">
              +91 86829 39901
            </p>
          </div>

          <div className="contact-card bg-slate-800 rounded-3xl p-6">
            <Mail className="text-emerald-400 mb-5" size={32} />
            <h3 className="font-semibold text-xl">Email</h3>
            <p className="mt-3 text-slate-300 break-all">
              suriyamattthew@gmail.com
            </p>
          </div>

          <div className="contact-card bg-slate-800 rounded-3xl p-6">
            <MapPin className="text-emerald-400 mb-5" size={32} />
            <h3 className="font-semibold text-xl">Location</h3>
            <p className="mt-3 text-slate-300">
              Chennai, Tamil Nadu
            </p>
          </div>

          <div className="contact-card bg-slate-800 rounded-3xl p-6">
            <MonitorCloud className="text-emerald-400 mb-5" size={32}  />
            <h3 className="font-semibold text-xl">LinkedIn</h3>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-emerald-400 hover:text-emerald-300 transition"
            >
              View Profile →
            </a>
          </div>

        </div>

        {/* CTA */}

        <div className="contact-card mt-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-[2rem] p-10 text-center">

          <h3 className="text-3xl font-bold">
            Ready to Build a Healthier Tomorrow?
          </h3>

          <p className="mt-4 text-emerald-50 max-w-2xl mx-auto">
            Let's connect to discuss clinical nutrition, corporate wellness,
            community health initiatives, or future opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="mailto:suriyamattthew@gmail.com"
              className="bg-white text-emerald-600 px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Get In Touch
            </a>

            <a
              href="/Suriya_Resume.pdf"
              download
              className="border border-white px-7 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-emerald-600 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}