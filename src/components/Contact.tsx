"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail, Share2, Send, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

// Custom SVG Components for Social Icons
const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 2000);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="w-full min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-6 py-24">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative z-10 bg-zinc-900/20 backdrop-blur-xl">

        {/* LEFT SIDE: INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-12 lg:p-16 bg-gradient-to-br from-zinc-900/50 to-black/50 flex flex-col justify-between"
        >
          {/* ... (Info content) */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6">
              <MessageSquare size={14} />
              Contact
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Get In <span className="text-sky-400">Touch</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Ready to build something extraordinary? I’m currently open to new
              opportunities and collaborations on challenging projects.
            </p>

            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-500/50 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-1">Email</p>
                  <a href="mailto:rasifalsaif@gmail.com" className="text-white font-medium group-hover:text-sky-400 transition-colors">rasifalsaif@gmail.com</a>
                </div>
              </motion.div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-1">Socials</p>
                    <div className="flex items-center gap-4 mt-1">
                      <motion.a 
                        whileHover={{ y: -3, color: "#38bdf8" }} 
                        href="https://www.linkedin.com/in/rasifalsaif" 
                        target="_blank" 
                        className="text-gray-400 transition-colors"
                      >
                        <LinkedinIcon size={18} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ y: -3, color: "#38bdf8" }} 
                        href="https://github.com/rasifalsaif" 
                        target="_blank" 
                        className="text-gray-400 transition-colors"
                      >
                        <GithubIcon size={18} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ y: -3, color: "#38bdf8" }} 
                        href="https://www.facebook.com/rasifalsaif" 
                        target="_blank" 
                        className="text-gray-400 transition-colors"
                      >
                        <FacebookIcon size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-sm text-gray-500 font-medium italic">
              &ldquo;Great things in business are never done by one person. They&apos;re done by a team of people.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-12 lg:p-16 bg-zinc-900/40 relative"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <CheckCircle size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-500">I&apos;ll get back to you as soon as possible.</p>
                </div>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="group">
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] ml-1">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full mt-2 p-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all"
                    />
                  </div>

                  <div className="group">
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] ml-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full mt-2 p-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all"
                    />
                  </div>

                  <div className="group">
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] ml-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full mt-2 p-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  disabled={status === "submitting"}
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl bg-sky-500 text-black font-bold flex items-center justify-center gap-3 hover:bg-sky-400 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message 
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* FOOTER AREA */}
      <footer className="absolute bottom-8 left-0 right-0 text-center flex flex-col items-center gap-2">
        <div className="w-12 h-[1px] bg-sky-500/20 mb-4"></div>
        <p className="text-gray-500 text-xs font-bold tracking-[0.5em] uppercase">Abdullah Al Saif</p>
        <p className="text-gray-600 text-[10px] tracking-widest">© {new Date().getFullYear()} • DESIGNED BY DEVELOPER</p>
      </footer>
    </section>
  );
}
