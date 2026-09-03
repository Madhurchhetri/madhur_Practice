
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-background p-8 text-foreground">

      {/* Heading Skeleton */}
      <Skeleton className="mb-8 h-10 w-40" />

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            {/* Image Skeleton */}
            <Skeleton className="h-72 w-full rounded-none" />

            {/* Content */}
            <div className="space-y-4 p-5">

              {/* Category */}
              <Skeleton className="h-4 w-24" />

              {/* Title */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-7 w-14" />
                <Skeleton className="h-4 w-24" />
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between pt-2">
                <Skeleton className="h-7 w-20" />
                <Skeleton className="h-10 w-28" />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;

