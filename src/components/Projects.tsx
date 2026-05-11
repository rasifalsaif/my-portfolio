"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight, Layers, Smartphone, Globe } from "lucide-react";

// Custom GitHub SVG Component (Since the icon is missing in the library)
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projects = [
  {
    title: "Learn-Stack - Enterprise LMS Platform",
    description: "Architected a high-performance LMS using Next.js 16 and React 19, optimized for Core Web Vitals.",
    image: "/learn.png",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS S3", "Arcjet"],
    features: [
      "Drag-and-drop course builder with GSAP",
      "Stripe payment & AWS S3 integration",
      "Hardened security with Arcjet & Zod",
    ],
    accent: "from-sky-400 to-cyan-400",
    category: "LMS Platform",
    icon: Layers,
    frontend: "https://github.com/rasifalsaif/learn-stack",
    backend: "https://github.com/rasifalsaif/learn-stack",
    live: "https://learn-stack-bot9.vercel.app/",
  },
  {
    title: "SkillBridge - Expert Tutoring Platform",
    description: "A robust platform connecting students with expert tutors through a scalable backend and intuitive interface.",
    image: "/skillbridge.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "React"],
    features: [
      "Multi-category Tutor Matching System",
      "Dynamic Session Booking & Management",
      "Comprehensive Admin Oversight Dashboard",
    ],
    accent: "from-purple-500 to-pink-500",
    category: "EdTech Platform",
    icon: Globe,
    frontend: "https://github.com/rasifalsaif/skillbridge-frontend",
    backend: "https://github.com/rasifalsaif/skillbridge-backend",
    live: "https://skillbridge-frontend-sigma.vercel.app/",
  },
  {
    title: "Greenmart - Multi-Vendor Ecommerce",
    description: "A sophisticated 5-tier role-based ecommerce and delivery ecosystem with real-time fulfillment and vendor analytics.",
    image: "/green.png",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    features: [
      "5-tier Role-Based Access (Admin to Customer)",
      "Real-time Delivery Assignment System",
      "Stripe Webhook-driven Payment Processing",
    ],
    accent: "from-rose-500 to-orange-500",
    category: "Ecommerce Ecosystem",
    icon: Smartphone,
    frontend: "https://github.com/rasifalsaif/green-mart",
    backend: "https://github.com/rasifalsaif/green-mart",
    live: "https://multivendor-phi.vercel.app/",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20"
        >
          <div className="max-w-2xl">
            <motion.div
              variants={itemVariants}
              className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              Case Studies
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Featured <span className="text-sky-400">Projects</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-gray-500 text-lg leading-relaxed"
            >
              A selection of my recent work where I&apos;ve tackled complex engineering 
              challenges and delivered high-impact solutions.
            </motion.p>
          </div>

          <motion.a
            variants={itemVariants}
            whileHover={{ x: 5 }}
            href="#"
            className="group flex items-center gap-2 text-sky-400 font-semibold text-sm transition-all"
          >
            Explore All Projects 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
                className="group relative flex flex-col h-full bg-zinc-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-sky-500/30 hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)] transition-all duration-500"
              >
                {/* Background Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                
                {/* IMAGE AREA */}
                <div className="relative h-64 overflow-hidden p-4">
                  <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      quality={90}
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2">
                      <Icon size={12} className="text-sky-400" />
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.accent}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-gray-500 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <motion.a 
                      href={project.frontend}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-white hover:bg-white/10 transition-all"
                    >
                      <GithubIcon size={14} /> Frontend
                    </motion.a>

                    <motion.a 
                      href={project.backend}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-white hover:bg-white/10 transition-all"
                    >
                      <GithubIcon size={14} /> Backend
                    </motion.a>

                    <motion.a 
                      href={project.live}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`col-span-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${project.accent} text-black text-[12px] font-bold shadow-lg transition-all`}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
