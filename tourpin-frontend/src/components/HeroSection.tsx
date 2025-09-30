import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white z-0 lg:bottom-24"
    >
      {/* Background graphic */}
      <img
        src="/hero_section_graphic.jpg"
        alt="Background graphic"
        className="absolute  -right-[1rem] sm:-right-[3rem] md:-right-[10rem] xl:-right-[15rem] max-w-xl sm:max-w-xl md:max-w-4xl lg:max-w-7xl -rotate-[0deg] sm:-rotate-[1deg] md:-rotate-[0deg] xl:-rotate-[25deg] -z-10 scale-[150%] sm:scale-[150%]"
        style={{ objectFit: "contain" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-16">
        {/* Text content */}
        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-8 md:space-y-12 lg:space-y-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-neutral-900 font-sans">
            <span className="block text-center md:text-left">“The App made for</span>
            <span className="block text-center md:text-left text-[#00af19] italic">
              Tourists”
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6b7280] max-w-sm sm:max-w-md md:max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <span className="block">
              TourPin transforms your moments into memories that{" "}
            </span>
            <span className="block">you can see, listen and touch.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
            <a
              href="#demo"
              className="inline-flex items-center justify-center w-[160px] sm:w-[180px] md:w-[200px] rounded-full px-6 py-3 text-sm font-semibold text-white 
             bg-gradient-to-r from-[#2ea0d1]  to-[#00af19]
             hover:scale-105 transition transform-gpu
             font-sans"
            >
              TRY DEMO
            </a>
          </div>
        </div>

        {/* Hero image */}
        <motion.img
          src="/hero_section_people.png"
          alt="Happy Tourists"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto md:mx-0 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
