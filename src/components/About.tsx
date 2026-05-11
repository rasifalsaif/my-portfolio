"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-sky-500/5 blur-[80px] rounded-full"></div>
            
            {/* Rotating Decorative Border */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full"
            ></motion.div>

            {/* The Image Container (Circular) */}
            <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/profile.png"
                alt="About Abdullah Al Saif"
                fill
                quality={100}
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Fallback Placeholder */}
              <div className="absolute inset-0 bg-zinc-900 -z-10 flex items-center justify-center text-gray-500 italic">
                About Image
              </div>
            </div>

            {/* Decorative accents on top of image */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-sky-500/30 rounded-tl-full z-20"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/30 rounded-br-full z-20"></div>
          </div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6">
            My Journey
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            About <span className="text-sky-400">Me</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I’m a full-stack web developer focused on building scalable and efficient web applications. 
              I work across both frontend and backend, ensuring clean architecture, strong performance, 
              and a smooth user experience.
            </p>

            <p>
              My goal is to create reliable and maintainable systems that can grow with real-world demands 
              while delivering modern, user-friendly interfaces. I believe that great code is not just functional, 
              but elegant and easy to understand.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 border-l-4 border-sky-500 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-gray-200 italic relative z-10 text-xl leading-snug">
              “Scalability and simplicity are at the core of everything I build.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
