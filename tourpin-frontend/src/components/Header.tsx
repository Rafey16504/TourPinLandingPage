"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-tourpin-soft-white/80 shadow-sm shadow-slate-50">
      <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8 h-16 sm:h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo_tourpin4.png"
            alt="TourPin Logo"
            className="h-20 sm:h-24 md:h-40 w-auto"
          />
        </a>

        {/* Right side: nav + button */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center text-sm space-x-6 lg:space-x-8">
            <a href="/" className="hover:text-green-600 transition-colors bg-pink-50 rounded-full px-4 py-2">
              Home
            </a>
            <a href="#who-we-are" className="hover:text-green-600 transition-colors bg-pink-50 rounded-full px-4 py-2">
              Who Are We?
            </a>
            <a href="#features" className="hover:text-green-600 transition-colors bg-pink-50 rounded-full px-4 py-2">
              Key Features
            </a>
            <a href="#demo" className="hover:text-green-600 transition-colors bg-pink-50 rounded-full px-4 py-2">
              Demo
            </a>
          </nav>

          {/* Desktop contact button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center w-[150px] justify-center rounded-full px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#2ea0d1]  to-[#00af19] hover:scale-105 transition transform-gpu"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown with animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg rounded-b-xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 px-4 py-4 text-sm">
              <a href="/" className="px-3 py-2 rounded-md hover:bg-gray-100">
                Home
              </a>
              <a href="#who-we-are" className="px-3 py-2 rounded-md hover:bg-gray-100">
                Who Are We?
              </a>
              <a href="#features" className="px-3 py-2 rounded-md hover:bg-gray-100">
                Key Features
              </a>
              <a href="#demo" className="px-3 py-2 rounded-md hover:bg-gray-100">
                Demo
              </a>
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#2ea0d1] to-[#00af19] hover:scale-105 transition"
              >
                Contact Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
