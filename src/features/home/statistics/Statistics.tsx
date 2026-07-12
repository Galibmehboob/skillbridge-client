"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpen,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/common/container/Container";
import Section from "@/components/common/section/Section";
import SectionTitle from "@/components/common/section-title/SectionTitle";

type Statistic = {
  id: number;
  value: string;
  label: string;
  icon: LucideIcon;
};

const statistics: Statistic[] = [
  {
    id: 1,
    value: "2K+",
    label: "Active Learners",
    icon: Users,
  },
  {
    id: 2,
    value: "500+",
    label: "Skills Shared",
    icon: BookOpen,
  },
  {
    id: 3,
    value: "150+",
    label: "Verified Mentors",
    icon: BadgeCheck,
  },
  {
    id: 4,
    value: "95%",
    label: "Success Rate",
    icon: TrendingUp,
  },
];

export default function Statistics() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="Our Growing Community"
          subtitle="Thousands of learners and mentors are already building their future with SkillBridge."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center rounded-2xl border border-default-200 bg-background/70 p-8 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="mt-6 text-4xl font-bold tracking-tight">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm font-medium text-foreground/70">
                  {stat.label}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}