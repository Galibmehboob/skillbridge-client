"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";

import Container from "@/components/common/container/Container";
import Section from "@/components/common/section/Section";

export default function CTA() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-default-200 bg-gradient-to-br from-primary/10 via-background/90 to-primary/5 px-6 py-16 text-center shadow-xl backdrop-blur-2xl sm:px-10 lg:px-20"
        >
          {/* Background Blur */}
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-default-200 bg-background/70 px-4 py-2 text-sm font-medium backdrop-blur-xl">
              Join SkillBridge Today
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Start Learning, Sharing &amp; Growing Today
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
              Join thousands of learners and mentors on SkillBridge. Discover
              new skills, share your expertise, and unlock better career
              opportunities.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="min-w-44 rounded-full px-6">
                Explore Skills
              </Button>

              <Button
                variant="outline"
                className="min-w-44 rounded-full border-default-300 bg-background/50 px-6 backdrop-blur"
              >
                Become a Mentor
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}