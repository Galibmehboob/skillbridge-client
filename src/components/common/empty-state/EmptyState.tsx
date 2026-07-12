import { Button } from "@heroui/react";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  action?: () => void;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[320px] w-full flex-col items-center justify-center rounded-2xl border border-default-200 bg-content1 px-6 py-12 text-center">
      <div className="max-w-md">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-default-600 sm:text-base">
          {description}
        </p>

        {actionLabel && action && (
          <Button
            className="mt-6"
            variant="primary"
            onPress={action}
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}