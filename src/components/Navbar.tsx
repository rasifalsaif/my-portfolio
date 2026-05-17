"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="font-bold text-xl tracking-tighter uppercase"
        >
          Abdullah Al Saif<span className="text-sky-400">.</span>
        </motion.h1>

        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-sky-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-sky-500 rounded-full text-xs font-bold uppercase tracking-widest text-black transition-all"
        >
          Hire Me
        </motion.a>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="h-[2px] bg-sky-500 origin-left"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
