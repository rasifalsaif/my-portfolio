"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Code, Cloud, Database } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const name = "Abdullah Al Saif";
  const nameLetters = Array.from(name);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-black text-white"
    >
      {/* Background Ambient Glows */}
      <div className="absolute w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full -top-40 -left-40 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full -bottom-20 -right-20"></div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-sky-400">
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
          >
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.05,
                    type: "spring",
                    stiffness: 150,
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-gray-400 max-w-lg mb-12 text-lg md:text-xl leading-relaxed"
          >
            I engineer scalable, high-performance applications that bring together powerful backend systems and seamless user experiences.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-5"
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sky-500 rounded-full font-bold flex items-center gap-2 transition-all cursor-pointer text-black"
            >
              View My Work <ArrowRight size={20} />
            </motion.a>

            <motion.a 
              href="/Abdullah_Al_Saif_Resume .pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/10 rounded-full text-white font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              Resume <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT (MULTI-LAYERED CIRCLE DESIGN) */}
        <div className="flex justify-center items-center relative py-10 lg:py-0 order-1 lg:order-2">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-64 h-64 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] group"
          >
            
            {/* LAYER 0: Background Pulse Glow (Behind Image) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 rounded-full blur-[80px] animate-pulse"></div>

            {/* LAYER 1: Profile Image (The Backmost Layer) */}
            <div className="absolute inset-0 rounded-full overflow-hidden z-0 border border-white/5">
              <Image
                src="/profile.png"
                alt="Abdullah Al Saif"
                fill
                quality={100}
                sizes="(max-width: 768px) 500px, (max-width: 1200px) 800px, 800px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Fallback color/text if image missing */}
              <div className="absolute inset-0 bg-zinc-900 -z-10 flex items-center justify-center text-gray-500 italic">
                Profile
              </div>
            </div>

            {/* LAYER 2: Subtle Outer Glow (Does not cover image center) */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] z-10 pointer-events-none"></div>

            {/* LAYER 3: Decorative Borders (No Blur) */}
            <div className="absolute inset-0 rounded-full border-[10px] border-white/5 z-20 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full border border-white/10 z-20 pointer-events-none"></div>

            {/* LAYER 4: Animated Outer Ring (Rotating) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 border-2 border-dashed border-sky-400/20 rounded-full z-30 pointer-events-none"
            ></motion.div>
            
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 border border-dotted border-purple-400/20 rounded-full z-30 pointer-events-none"
            ></motion.div>

            {/* LAYER 5: Floating Icons (Topmost) */}
            
            {/* Code Icon */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-10 w-14 h-14 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl z-40 text-sky-400"
            >
              <Code size={28} />
            </motion.div>

            {/* Cloud Icon */}
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-12 w-16 h-16 bg-black/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-2xl z-40 text-purple-400"
            >
              <Cloud size={30} />
            </motion.div>

            {/* Database Icon */}
            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 right-0 w-14 h-14 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl z-40 text-blue-400"
            >
              <Database size={26} />
            </motion.div>

            {/* Center Pulsing Glow (on hover) */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-sky-500/10 blur-[40px] z-10 pointer-events-none"></div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Scroll</span>
        <div className="w-[30px] h-[50px] border-2 border-white/10 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-sky-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
