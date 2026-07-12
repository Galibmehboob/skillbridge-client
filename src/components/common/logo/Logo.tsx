import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={`inline-flex items-center transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ${className}`}
    >
      <span className="text-2xl font-bold tracking-tight text-foreground">
        Skill
        <span className="text-primary">Bridge</span>
      </span>
    </Link>
  );
}