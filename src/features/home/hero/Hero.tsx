"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  ArrowRight,
  BadgeCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import Container from "@/components/common/container/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-background to-default-100/40" />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-default-300/20 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-default-200 bg-background/70 px-4 py-2 text-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              <span>Trusted Skill Sharing Platform</span>
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn.
              <br />
              Share.
              <br />
              Grow Together.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                SkillBridge
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-foreground/70 sm:text-lg">
              SkillBridge connects learners and skilled professionals through a
              trusted platform where anyone can discover, share, and grow
              valuable skills together.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="h-12 px-6">
                Explore Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="h-12 border-default-300 bg-background/50 px-6 backdrop-blur"
              >
                Share Your Skill
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[460px] w-full max-w-md rounded-[32px] border border-default-200 bg-background/60 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute bottom-10 right-8 h-24 w-24 rounded-full bg-default-300/20 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="rounded-2xl border border-default-200 bg-background/70 p-5 backdrop-blur-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Verified Mentors</p>
                      <p className="text-sm text-foreground/60">
                        Learn from trusted experts
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="ml-auto w-52 rounded-2xl border border-default-200 bg-background/75 p-5 shadow-lg backdrop-blur-xl"
                >
                  <p className="text-3xl font-bold">⭐ 500+</p>
                  <p className="mt-1 text-sm text-foreground/60">Skills</p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="rounded-2xl border border-default-200 bg-background/75 p-5 shadow-lg backdrop-blur-xl"
                  >
                    <Users className="mb-3 h-6 w-6 text-primary" />
                    <p className="text-2xl font-bold">2K+</p>
                    <p className="text-sm text-foreground/60">Members</p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="rounded-2xl border border-default-200 bg-background/75 p-5 shadow-lg backdrop-blur-xl"
                  >
                    <TrendingUp className="mb-3 h-6 w-6 text-primary" />
                    <p className="text-lg font-semibold">Career Growth</p>
                    <p className="text-sm text-foreground/60">
                      Learn. Improve. Succeed.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}