"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  Code2,
  Palette,
  Megaphone,
  Database,
  Smartphone,
  PenTool,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/common/container/Container";
import Section from "@/components/common/section/Section";
import SectionTitle from "@/components/common/section-title/SectionTitle";

type Category = {
  id: number;
  name: string;
  description: string;
  skills: number;
  icon: typeof Code2;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Learn modern frontend and backend technologies to build scalable web applications.",
    skills: 124,
    icon: Code2,
  },
  {
    id: 2,
    name: "UI/UX Design",
    description:
      "Design beautiful, user-friendly interfaces and engaging digital experiences.",
    skills: 86,
    icon: Palette,
  },
  {
    id: 3,
    name: "Digital Marketing",
    description:
      "Master SEO, social media, branding, and growth marketing strategies.",
    skills: 74,
    icon: Megaphone,
  },
  {
    id: 4,
    name: "Data Science",
    description:
      "Analyze data, build predictive models, and unlock valuable business insights.",
    skills: 58,
    icon: Database,
  },
  {
    id: 5,
    name: "Mobile Development",
    description:
      "Create high-performance Android and iOS applications with modern frameworks.",
    skills: 69,
    icon: Smartphone,
  },
  {
    id: 6,
    name: "Graphic Design",
    description:
      "Develop creative branding, illustrations, and visual communication skills.",
    skills: 92,
    icon: PenTool,
  },
];

export default function Categories() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="Browse by Categories"
          subtitle="Choose a category and discover skills shared by experienced mentors."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.id}
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
                  {category.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-foreground/70">
                  {category.description}
                </p>

                <div className="mt-6 inline-flex w-fit rounded-full border border-default-200 bg-background/60 px-3 py-1 text-sm font-medium backdrop-blur">
                  {category.skills} Available Skills
                </div>

                <Button className="mt-8 w-full">
                  <span>Explore Category</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}