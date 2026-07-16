"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          About SkillBridge
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-default-600 leading-relaxed">
          SkillBridge connects talented developers, designers, and creators with
          founders who are building innovative startups. Our mission is to make
          collaboration simple, secure, and meaningful.
        </p>
      </motion.div>

      {/* Pillars Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Our Mission",
            text: "Build a community where great ideas meet talented people to form functional digital solutions.",
          },
          {
            title: "Our Vision",
            text: "Empower creators worldwide through modern collaboration techniques and fast-paced technological innovation.",
          },
          {
            title: "Why SkillBridge",
            text: "Enjoy reliable professional profiles, thoroughly verified skillsets, and seamless cross-functional team collaboration.",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            className="group relative rounded-2xl border border-black/5 bg-background/60 p-8 shadow-[0_8px_32px_0_rgba(30,58,138,0.03)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#1E3A8A]/5 hover:shadow-[0_12px_40px_0_rgba(20,184,166,0.1)] dark:border-white/10 dark:bg-background/40 dark:hover:bg-white/5"
          >
            {/* Top accent highlight decoration */}
            <div className="absolute top-0 left-8 h-[2px] w-12 bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] opacity-60 transition-all duration-300 group-hover:w-20" />

            <h3 className="text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-[#1E3A8A] dark:group-hover:text-[#14B8A6]">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-default-600 transition-colors duration-200 group-hover:text-foreground/90">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}