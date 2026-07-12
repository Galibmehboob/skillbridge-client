import type { FC } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
}) => {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`mb-10 flex flex-col ${alignment}`}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-default-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;