// CategoryFilterSkeleton.jsx
import React from "react";

export function CategoryFilterSkeleton() {
  const renderSkeletonGroup = (count, width, opacity) => (
    <div className="relative">
      <div className="overflow-x-auto pb-2 -mx-4 px-4 md:overflow-x-visible">
        <div className="flex flex-wrap gap-2 min-w-max md:min-w-0 justify-start md:justify-center">
          {[...Array(count)].map((_, index) => (
            <div
              key={index}
              className={`h-10 ${width} rounded-full bg-zinc-800/${opacity} animate-pulse`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col space-y-4 max-w-6xl mx-auto">
      {renderSkeletonGroup(6, "w-24", "50")}
      {renderSkeletonGroup(4, "w-28", "30")}
      {renderSkeletonGroup(3, "w-32", "20")}
    </div>
  );
}

// CategorySelectorSkeleton.jsx
export function CategorySelectorSkeleton() {
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto mt-8">
      <div className="h-10 w-16 px-4 py-2 rounded-full animate-pulse bg-zinc-800/10 border border-zinc-700/30" />
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="h-10 w-24 px-4 py-2 rounded-full animate-pulse bg-zinc-800/10 border border-zinc-700/30"
        />
      ))}
    </div>
  );
}

// ContactSectionSkeleton.jsx
export function ContactSectionSkeleton() {
  return (
    <section className="mt-16 max-w-3xl mx-auto p-6 bg-zinc-900 rounded-3xl border border-zinc-800">
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="h-8 w-3/4 bg-zinc-800/50 rounded-lg animate-pulse" />
        <div className="h-8 w-1/2 bg-zinc-800/50 rounded-lg animate-pulse" />
      </div>
      <div className="flex flex-col items-center gap-2 mb-4">
        <div className="h-6 w-2/3 bg-zinc-800/30 rounded-lg animate-pulse" />
        <div className="h-6 w-1/2 bg-zinc-800/30 rounded-lg animate-pulse" />
      </div>
      {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="h-12 w-32 rounded-3xl animate-pulse bg-amber-500/10 border border-amber-500/30"
          />
        ))}
      </div> */}
    </section>
  );
}

// ResourceSkeleton.jsx
export function ResourceBlockSkeleton() {
  return (
    <div className="bg-zinc-900/10 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-amber-500/30 flex flex-col min-h-[300px] animate-pulse">
      <div className="mb-2 sm:mb-3">
        <div className="h-6 bg-zinc-800/50 rounded w-2/3" />
      </div>
      <div className="space-y-2 mb-3 sm:mb-4">
        <div className="h-3 bg-zinc-800/50 rounded w-full" />
        <div className="h-3 bg-zinc-800/50 rounded w-4/5" />
      </div>
      <ul className="space-y-2 sm:space-y-2.5 overflow-y-auto pr-2 custom-scrollbar flex-grow max-h-[350px]">
        {[...Array(6)].map((_, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="h-4 bg-zinc-800/50 rounded w-6" />
            <div className="h-4 w-4 bg-zinc-800/50 rounded-full" />
            <div className="h-4 bg-zinc-800/50 rounded w-3/4" />
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <div className="w-full h-10 bg-zinc-800/50 rounded-full" />
      </div>
    </div>
  );
}

export function ResourceGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12 max-w-7xl mx-auto px-4">
      {[...Array(8)].map((_, index) => (
        <ResourceBlockSkeleton key={index} />
      ))}
    </div>
  );
}

// SearchBarSkeleton.jsx
export function SearchBarSkeleton() {
  return (
    <div className="flex items-center max-w-2xl mx-auto relative">
      <div className="relative w-full group animate-pulse">
        <div className="w-full h-14 bg-zinc-800/50 rounded-full border border-amber-500/20" />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-zinc-700/50" />
        {/* <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 backdrop-blur-xl rounded-xl border border-zinc-800 shadow-2xl overflow-hidden">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="p-4 border-b border-amber-500/10 last:border-none"
            >
              <div className="flex items-center gap-3">
                <div className="bg-zinc-800/50 p-1.5 rounded-lg">
                  <div className="w-5 h-5 bg-zinc-700/50 rounded" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="h-5 bg-zinc-700/50 rounded w-32" />
                    <div className="h-5 bg-zinc-800/50 rounded-full w-20" />
                  </div>
                  <div className="h-4 bg-zinc-800/30 rounded w-3/4 mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

// ViewAllSkeleton.jsx
export function ViewAllSkeleton() {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-6xl max-h-[85vh] overflow-hidden flex flex-col border border-amber-500/30 animate-pulse">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="h-8 bg-zinc-800/50 rounded-lg w-64 mb-2" />
            <div className="h-4 bg-zinc-800/30 rounded w-80" />
          </div>
          <div className="w-10 h-10 bg-zinc-800/50 rounded-lg" />
        </div>
        <div className="overflow-y-auto pr-4 custom-scrollbar flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="bg-zinc-800 p-2 rounded-xl">
                      <div className="w-6 h-6 bg-zinc-700/50 rounded" />
                    </div>
                    <div className="h-6 bg-zinc-800/50 rounded w-40" />
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-zinc-800/30 rounded w-full" />
                  <div className="h-4 bg-zinc-800/30 rounded w-3/4" />
                </div>
                <div className="flex gap-2">
                  <div className="h-10 bg-gradient-to-r from-amber-500/30 to-zinc-700/30 rounded-xl w-32" />
                  <div className="h-10 bg-zinc-800/50 rounded-xl w-32" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
