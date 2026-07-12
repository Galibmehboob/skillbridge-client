import { Card,  Skeleton } from "@heroui/react";

interface SkeletonCardProps {
  className?: string;
}

export default function SkeletonCard({
  className = "",
}: SkeletonCardProps) {
  return (
    <Card
      className={`h-full w-full overflow-hidden rounded-2xl border border-default-200 ${className}`}
      
    >
      <Card className="space-y-4 p-4">
        {/* Image */}
        <Skeleton className="h-52 w-full rounded-xl" />

        {/* Title */}
        <Skeleton className="h-6 w-3/4 rounded-lg" />

        {/* Subtitle */}
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-5/6 rounded-lg" />

        {/* Tags */}
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-16 rounded-full" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4">
          <Skeleton className="h-10 w-24 rounded-lg" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </Card>
    </Card>
  );
}