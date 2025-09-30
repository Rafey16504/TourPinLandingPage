import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function WhoWeAre() {
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
      id="who-we-are"
      className="relative min-h-screen flex items-center bg-white py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 md:space-y-10 text-center md:text-left"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              What is <span className="text-green-600">TourPin?</span>
            </h2>
            <h3 className="mt-2 text-lg sm:text-xl font-semibold text-green-600">
              The Future of Tourism
            </h3>
          </div>

          <p className="w-5/6 mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-loose max-w-2xl mx-auto md:mx-0">
            TourPin is a visionary technology company building the future of
            travel — an emotional, memory-powered journey where tourists don’t
            just visit places, but live authentic moments, preserve them
            forever, and share them with meaning.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full flex justify-center"
        >
          <img
            src="/who_we_are_graphic.png"
            alt="TourPin illustration"
            className="max-w-sm sm:max-w-lg md:max-w-lg lg:max-w-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
