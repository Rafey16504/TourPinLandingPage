import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltedCard from "./ui/TiltedCard";

export default function TeamAndVision() {
  const [activeTab, setActiveTab] = useState<"team" | "values" | "vision">(
    "team"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const tabs = [
    { id: "values", label: "Values" },
    { id: "team", label: "Team" },
    { id: "vision", label: "Vision" },
  ];

  const values = [
    {
      title: "Transparency",
      initial: "T",
      text: `We believe transparency is not just about data privacy, it's about empowerment. By being transparent, we build trust and return value to travellers and hosts alike.`,
      bullets: [
        "Clear communication on data use",
        "Anonymised insights for businesses",
        "Empowering institutions to grow sustainably",
      ],
    },
    {
      title: "Organisation",
      initial: "O",
      text: `Great ideas require great execution. Our culture ensures clarity, accountability, and scalable systems.`,
      bullets: [
        "Vision-aligned features & partnerships",
        "Fast but quality-focused launches",
        "Clean codebases & smooth UX flows",
      ],
    },
    {
      title: "Union",
      initial: "U",
      text: `Tourism should bring people together, not separate them. Union lies at the heart of TourPin.`,
      bullets: [
        "Connecting travellers & locals",
        "Highlighting authentic cultures & artists",
        "Global network of shared stories",
      ],
    },
    {
      title: "Reliability",
      initial: "R",
      text: `When millions depend on your app during travel, there’s no room for error. Reliability is non-negotiable.`,
      bullets: [
        "Secure, fast & available everywhere",
        "GDPR compliant & user-controlled privacy",
        "Responsive support & continuous improvement",
      ],
    },
  ];

  const team = [
    {
      name: "Emanuel Mora Diaz",
      role: "FOUNDER & CEO",
      photo: "/team1.jpg",
      phrase: "The best tourism ecosystem, for all tourists.",
    },
    {
      name: "Marcus Chan",
      role: "CO-FOUNDER & CTO",
      photo: "/team2.png",
      phrase: "Let us make your travelling worths.",
    },
    {
      name: "Abdul Rafey",
      role: "DIRECTOR OF FRONTEND",
      photo: "/team3.jpg",
      phrase: "Designing moments, not just screens.",
    },
    {
      name: "Shri Srivastava",
      role: "FULL STACK DEVELOPER",
      photo: "/team4.jpg",
      phrase: "Building the future of travel.",
    },
  ];

  // Slideshow auto-rotate for values
  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 1500);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [hovered]);

  return (
    <section
      id="team-and-vision"
      className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 bg-white py-24"
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-gray-100 rounded-xl p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition ${
              activeTab === tab.id
                ? "bg-green-500 text-white shadow"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-12 sm:mt-16 w-full max-w-6xl text-center">
        <AnimatePresence mode="wait">
          {activeTab === "vision" && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto px-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-6 sm:mb-8">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                TourPin is a visionary technology company building the future of
                travel, an emotional, memory-powered journey where tourists
                don’t just visit places, but live authentic moments, preserve
                them forever, and share them with meaning. <br /> <br />
                Launching first in the Dominican Republic, TourPin redefines the
                travel experience by seamlessly integrating discovery, emotion,
                and memory into one platform. With AI-powered recommendations,
                cultural discovery, and physical albums, we are not just a tool
                — we aim to become the journey itself.
              </p>
            </motion.div>
          )}

          {activeTab === "values" && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6"
            >
              {values.map((val, i) => {
                const isActive = hovered || i === activeIndex;
                return (
                  <motion.div
                    key={val.title}
                    className="bg-white p-6 text-center flex flex-col items-center cursor-pointer rounded-lg"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      <span className="text-4xl sm:text-5xl md:text-6xl text-green-600 font-extrabold mr-1">
                        {val.initial}
                      </span>
                      {val.title.slice(1)}
                    </h3>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-3 text-left w-full"
                        >
                          <p className="text-gray-600 text-sm mb-2">
                            {val.text}
                          </p>
                          <ul className="list-disc list-inside text-xs text-gray-500 space-y-1">
                            {val.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8"
            >
              {team.map((m) => (
                <div
                  key={m.name}
                  className="flex flex-col items-center text-center gap-y-8 sm:gap-y-12"
                >
                  {/* Tilted Card */}
                  <TiltedCard
                    imageSrc={m.photo}
                    altText={`${m.name} - ${m.role}`}
                    captionText={m.name}
                    containerHeight="260px"
                    containerWidth="100%"
                    imageHeight="460px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                  />

                  {/* Info below card */}
                  <div className="px-10 mt-48">
                    <span className="text-sm text-green-600 font-medium">
                      {m.role}
                    </span>
                    <h3 className="mt-1 font-semibold text-gray-800">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 italic">
                      "{m.phrase}"
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
