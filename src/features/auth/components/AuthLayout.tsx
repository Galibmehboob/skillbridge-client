"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import Container from "@/components/common/container/Container";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid min-h-[calc(100vh-5rem)] overflow-hidden rounded-3xl border border-default-200 bg-content1 shadow-xl lg:grid-cols-2"
        >
          {/* Left Side */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-background p-10 lg:flex lg:flex-col lg:justify-center">
            {/* Decorative Blur */}
            <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />

            <div className="relative z-10 max-w-md">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                SkillBridge
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-foreground">
                Learn.
                <br />
                Share.
                <br />
                Grow.
              </h1>

              <p className="mt-6 text-base leading-7 text-default-600">
                SkillBridge is a collaborative platform where founders,
                collaborators, and innovators connect, share ideas, build
                meaningful relationships, and grow together through real-world
                opportunities.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12">
            <div className="w-full max-w-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}