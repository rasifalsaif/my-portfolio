"use client";

import { motion } from "framer-motion";
import { Layout, Database, Server, Terminal, Cpu, CheckCircle2 } from "lucide-react";

const skills = [
  {
    title: "Frontend Mastery",
    icon: Layout,
    description: "Architecting immersive, responsive user interfaces with modern frameworks.",
    color: "from-sky-400 to-blue-500",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend Infrastructure",
    icon: Database,
    description: "Building robust server-side logic and scalable database architectures.",
    highlight: true,
    color: "from-blue-500 to-purple-500",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Better Auth"],
  },
  {
    title: "Deployment & Tools",
    icon: Server,
    description: "Streamlining development lifecycles and managing cloud ecosystems.",
    color: "from-purple-500 to-pink-500",
    items: ["Git", "Docker", "AWS", "CI/CD", "System Design"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Cpu size={14} />
            Capabilities
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Technical <span className="text-sky-400">Arsenal</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-500 max-w-2xl mx-auto"
          >
            A comprehensive suite of tools and technologies I leverage to build 
            production-ready applications that scale.
          </motion.p>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative group p-8 rounded-3xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm transition-all duration-500 
                hover:bg-zinc-900/50 hover:border-sky-500/30
                ${skill.highlight ? "ring-1 ring-sky-500/20 shadow-[0_0_50px_rgba(56,189,248,0.05)]" : ""}`}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* ICON & HEADER */}
                <div className="relative mb-8">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} p-[1px] shadow-lg group-hover:shadow-sky-500/20 transition-all duration-500`}>
                    <div className="w-full h-full bg-zinc-950 rounded-[15px] flex items-center justify-center">
                      <Icon className="text-white w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {skill.description}
                </p>

                {/* SKILL TAGS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BOTTOM ACCENT */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-sky-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  <Terminal size={14} />
                  <span>Verified Expertise</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM TAGLINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {/* Subtle tech labels or simple dividers */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase">
            <CheckCircle2 size={16} /> Scalable Architecture
          </div>
          <div className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase">
            <CheckCircle2 size={16} /> Clean Code
          </div>
          <div className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase">
            <CheckCircle2 size={16} /> DevOps Mindset
          </div>
        </motion.div>
      </div>
    </section>
  );
}
