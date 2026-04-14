import { SkeletonGrid } from '@/components/SkeletonCard';

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      {/* Hero Skeleton */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl bg-surface-800 animate-pulse" />

      {/* Trending Skeleton */}
      <div>
        <div className="h-8 bg-surface-700 rounded w-48 mb-6" />
        <SkeletonGrid count={8} />
      </div>

      {/* Category Skeleton */}
      <div>
        <div className="h-8 bg-surface-700 rounded w-40 mb-6" />
        <SkeletonGrid count={4} />
      </div>
    </div>
  );
}
