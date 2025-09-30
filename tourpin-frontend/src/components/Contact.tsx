import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Particles from "./ui/Particles";

export default function Contact() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.3 });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [waitingCount, setWaitingCount] = useState<number | null>(null);

useEffect(() => {
  fetch(`${process.env.REACT_APP_GOOGLE_SHEETS_SCRIPT_URL}`) // no params → just count
    .then((res) => res.json())
    .then((data) => setWaitingCount(data.count))
    .catch((err) => console.error("Error fetching count:", err));
}, []);


  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 50 });
  }, [isInView, controls]);

  // Auto-hide status messages after 5s
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendToGoogleSheets = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const user_name = (form.elements.namedItem("user_name") as HTMLInputElement).value;
    const user_email = (form.elements.namedItem("user_email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const params = new URLSearchParams({
      user_name,
      user_email,
      message,
    });

    fetch(
      `${process.env.REACT_APP_GOOGLE_SHEETS_SCRIPT_URL}?${params.toString()}`
    )
      .then((res) => res.json())
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.reset();
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Waves */}
      <div className="absolute top-0 h-1/3 w-screen -z-10 flex">
        <img
          src="/key_features_5.png"
          alt="Decorative wave left"
          className="w-screen opacity-100 scale-x-0 lg:scale-x-[-105%] rotate-180"
        />
        <img
          src="/key_features_5.png"
          alt="Decorative wave right"
          className="w-screen scale-x-0 lg:scale-x-[105%] opacity-100 rotate-180"
        />
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#00af19", "#7ed957", "#50e2d3"]}
          particleCount={500}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Soft glowing orb */}
      <div className="absolute left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full blur-3xl bg-green-300/20 -z-10 animate-pulse" />

      {/* Content */}
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900"
        >
          Get in Touch
        </motion.h2>

        <motion.p
  animate={controls}
  initial={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
  className="mt-6 text-base sm:text-lg text-[#4a4f57]"
>
  Join the waiting list or contact us — we’d love to hear from you!
</motion.p>



        {/* Contact Form */}
        <motion.form
          onSubmit={sendToGoogleSheets}
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              required
              className="w-full rounded-lg border border-[#abb1b9]/30 p-3 text-[#4a4f57] bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#50e2d3]"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              required
              className="w-full rounded-lg border border-[#abb1b9]/30 p-3 text-[#4a4f57] bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#50e2d3]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            rows={5}
            required
            className="w-full rounded-lg border border-[#abb1b9]/30 p-3 text-[#4a4f57] bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#50e2d3]"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#00af19] to-[#7ed957] shadow-md hover:shadow-lg hover:scale-105 transition transform-gpu"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Feedback */}
          <AnimatePresence>
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-green-600 font-medium mt-4"
              >
                You’ve been put on the waiting list for <b>TourPin</b>!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-red-600 font-medium mt-4"
              >
                Oops, something went wrong. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
<motion.p
  className="text-base text-gray-600 mt-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  🌍📌 {waitingCount !== null 
    ? `${waitingCount} travelers are already waiting to explore with TourPin!` 
    : "Loading waiting list..."}
</motion.p>

        </motion.form>
       

      </div>
    </section>
  );
}
