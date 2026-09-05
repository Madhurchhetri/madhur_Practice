import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            {/* Image Skeleton */}
            <div className="relative flex h-72 items-center justify-center bg-gray-50 p-6">
              <Skeleton className="h-full w-full rounded-xl" />

              {/* Wishlist Skeleton */}
              <Skeleton className="absolute right-4 top-4 h-10 w-10 rounded-full" />
            </div>

            {/* Content */}
            <div className="p-5">

              {/* Category */}
              <Skeleton className="h-6 w-28 rounded-full" />

              {/* Title */}
              <div className="mt-3 space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>

              {/* Description */}
              <div className="mt-3 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-12" />
              </div>

              {/* Price + Button */}
              <div className="mt-5 flex items-center justify-between">
                <Skeleton className="h-8 w-24" />

                <Skeleton className="h-12 w-32 rounded-xl" />
              </div>

            </div>
          </div>
        ))}

      </div>
    </main>
  );
};

export default loading;