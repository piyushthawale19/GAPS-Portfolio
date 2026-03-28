import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);

  const items = [
    "SCALABLE SYSTEMS",
    "CLEAN CODE",
    "HIGH PERFORMANCE",
    "MODERN UI/UX",
    "REAL-WORLD SOLUTIONS",
  ];

  const items2 = [
    "LET'S CONNECT",
    "START A PROJECT",
    "WORK WITH ME",
    "CONTACT NOW",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />

      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ I craft <br />
          <span className="font-normal">scalable</span> &{" "}
          <span className="italic">high-performance</span> <br />
          web applications with{" "}
          <span className="text-gold">modern UI/UX</span> “
        </p>

        {/* 👇 New Personal Details */}
        <div className="mt-8 text-sm md:text-base text-neutral-400">
          <p>
            I'm <span className="text-gold font-medium">Piyush Thawale</span>, a
            Full Stack Developer specializing in{" "}
            <span className="text-gold">React, Next.js & MERN Stack</span>.
          </p>

          <p className="mt-2">
            I build fast, scalable, and user-focused digital experiences with clean
            architecture and modern design systems.
          </p>

          <p className="mt-2">
            Currently exploring{" "}
            <span className="text-gold">AI, GenAI & advanced frontend interactions</span>{" "}
            to create next-level web products.
          </p>
        </div>
      </div>

      <Marquee
        items={[
          "Full Stack Developer",
          "React.js",
          "Next.js",
          "MERN Stack",
          "UI/UX Focused",
          "AI Enthusiast",
          "Open to Work",
        ]}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
