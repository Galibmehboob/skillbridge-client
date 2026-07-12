import Link from "next/link";
import { Button } from "@heroui/react";

interface NotFoundProps {
  title?: string;
  description?: string;
}

export default function NotFound({
  title = "Page Not Found",
  description = "Sorry, the page you're looking for doesn't exist or may have been moved.",
}: NotFoundProps) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          404 Error
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-4 text-base leading-7 text-default-600 sm:text-lg">
          {description}
        </p>

       <Link href="/">
  <Button variant="primary">
    Back to Home
  </Button>
</Link>
      </div>
    </section>
  );
}