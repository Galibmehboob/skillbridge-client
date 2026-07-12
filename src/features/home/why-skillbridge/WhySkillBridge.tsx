"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Laptop,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/common/container/Container";
import Section from "@/components/common/section/Section";
import SectionTitle from "@/components/common/section-title/SectionTitle";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Verified Mentors",
    description:
      "Learn from trusted professionals with real-world experience.",
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: "Hands-on Learning",
    description:
      "Practical skill sharing through real projects and collaboration.",
    icon: Laptop,
  },
  {
    id: 3,
    title: "Career Growth",
    description:
      "Build valuable skills that help you advance your professional journey.",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Supportive Community",
    description:
      "Connect with learners and mentors in a positive learning environment.",
    icon: Users,
  },
];

export default function WhySkillBridge() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="Why Choose SkillBridge"
          subtitle="Discover why thousands of learners and mentors trust SkillBridge to learn, teach, and grow together."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex h-full flex-col rounded-2xl border border-default-200 bg-background/70 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-foreground/70">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}