export default function SkeletonCard() {
  return (
    <div className="glass-card overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-surface-600" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-surface-600 rounded w-3/4" />
        <div className="flex items-center justify-between">
          <div className="h-3 bg-surface-600 rounded w-20" />
          <div className="h-3 bg-surface-600 rounded w-10" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
