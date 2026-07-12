import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
    >
      {children}
    </section>
  );
}