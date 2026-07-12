"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Clock3, GraduationCap, UserRound } from "lucide-react";

import Container from "@/components/common/container/Container";
import Section from "@/components/common/section/Section";
import SectionTitle from "@/components/common/section-title/SectionTitle";

type Skill = {
  id: number;
  title: string;
  description: string;
  category: string;
  mentor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  image: string;
};

const featuredSkills: Skill[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Build responsive and modern web applications using industry-standard frontend technologies.",
    category: "Development",
    mentor: "Sarah Johnson",
    level: "Beginner",
    duration: "6 Weeks",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Master user-centered design principles and create beautiful digital experiences.",
    category: "Design",
    mentor: "Michael Lee",
    level: "Intermediate",
    duration: "8 Weeks",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Learn SEO, social media marketing, and growth strategies for modern businesses.",
    category: "Marketing",
    mentor: "Emily Davis",
    level: "Beginner",
    duration: "5 Weeks",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Data Analytics",
    description:
      "Transform raw data into meaningful insights using practical analytics techniques.",
    category: "Analytics",
    mentor: "David Wilson",
    level: "Advanced",
    duration: "10 Weeks",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
];

export default function FeaturedSkills() {
  return (
    <Section>
      <Container>
        <SectionTitle
       
          title="Discover Popular Skills"
          subtitle="Explore trending skills shared by verified mentors and professionals to boost your career."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredSkills.map((skill, index) => (
            <motion.article
              key={skill.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-default-200 bg-background/70 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 25vw"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
                  {skill.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {skill.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-foreground/70">
                  {skill.description}
                </p>

                <div className="mt-6 space-y-3 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <UserRound className="h-4 w-4" />
                    <span>{skill.mentor}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{skill.level}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    <span>{skill.duration}</span>
                  </div>
                </div>

                <Button className="mt-8 w-full">
                  View Details
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}