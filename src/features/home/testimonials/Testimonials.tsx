"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Award } from "lucide-react";

import Container from "@/components/common/container/Container";
import Section from "@/components/common/section/Section";
import SectionTitle from "@/components/common/section-title/SectionTitle";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  skill: string;
  image: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Learner",
    skill: "React Development",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    review:
      "SkillBridge completely changed the way I learn. The mentors were supportive, the lessons were practical, and I gained the confidence to build real-world React applications.",
  },
  {
    id: 2,
    name: "David Wilson",
    role: "UI/UX Mentor",
    skill: "Product Design",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    review:
      "Sharing knowledge on SkillBridge has been incredibly rewarding. The platform makes it easy to connect with motivated learners and help them grow professionally.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Digital Marketing Learner",
    skill: "SEO & Marketing",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    review:
      "The structured guidance and real-world projects helped me strengthen my marketing skills. I landed freelance opportunities much faster than I expected.",
  },
];

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="What Our Community Says"
          subtitle="Hear from learners and mentors who have grown their careers through SkillBridge."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col rounded-2xl border border-default-200 bg-background/70 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-default-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-foreground/70">{item.role}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-foreground/70">
                “{item.review}”
              </p>

              <div className="mt-6 flex items-center gap-2 rounded-xl border border-default-200 bg-background/60 px-3 py-2 backdrop-blur">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{item.skill}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}