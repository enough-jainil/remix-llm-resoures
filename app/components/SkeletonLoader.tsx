const SkeletonCard = () => (
  <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50 animate-pulse">
    {/* Header */}
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-zinc-800 rounded-xl"></div>
      <div className="flex-1">
        <div className="h-6 bg-zinc-800 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
      </div>
    </div>

    {/* Description */}
    <div className="space-y-2 mb-4">
      <div className="h-4 bg-zinc-800 rounded w-full"></div>
      <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
    </div>

    {/* Resource List */}
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-6 h-6 bg-zinc-800 rounded"></div>
          <div className="h-4 bg-zinc-800 rounded flex-1"></div>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="mt-4">
      <div className="h-10 bg-zinc-800 rounded-full w-full"></div>
    </div>
  </div>
);

export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {[...Array(8)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
