import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Orb from "./ui/Orb"; // ✅ import Orb

export default function Demo() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      id="demo"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Orb Background */}
      <div className="absolute inset-0 -z-10 scale-[115%] xl:scale-100">
        <Orb
          hoverIntensity={1.5}
          rotateOnHover={true}
          hue={83}
          forceHoverState={false}
        />
      </div>

      {/* Content */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-4xl text-center relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
          See TourPin in action
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#4a4f57] max-w-2xl mx-auto">
          Experience a quick interactive preview of how TourPin turns your
          adventures into living memories.
        </p>
        <div className="mt-6 sm:mt-10">
          <a
            href="https://tourpin-concert-mapper.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00af19] to-[#7ed957] shadow-md hover:shadow-lg hover:scale-105 transition transform-gpu"
          >
            View Live Demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
