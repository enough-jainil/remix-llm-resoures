import { Resource } from "~/types/resource";

import { ActionButtons } from "./ActionButtons";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-4">
          <div className="bg-zinc-800 p-2 rounded-xl">
            <img
              src={resource.favicon}
              alt=""
              className="w-6 h-6 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <h3 className="text-lg text-white font-medium">{resource.name}</h3>
        </div>
      </div>
      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
        {resource.description ||
          "Explore this valuable resource for LLM development and research."}
      </p>
      <ActionButtons resource={resource} />
    </div>
  );
}
