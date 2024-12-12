import { useParams, Link } from "@remix-run/react";
import { resourceBlocks } from "~/data/resources";

export default function ResourceDetail() {
  const { tag2, name } = useParams();
  console.log("Params:", { tag2, name }); // Debug log

  // Find the block with matching tag2 or fall back to tag
  const block = resourceBlocks.find(
    (block) =>
      block.tag2 === decodeURIComponent(tag2) ||
      block.tag === decodeURIComponent(tag2)
  );
  console.log("Found block:", block?.title); // Debug log

  // Find the resource in that block by name
  const resource = block?.resources.find(
    (r) => r.name === decodeURIComponent(name)
  );
  console.log("Found resource:", resource?.name); // Debug log

  if (!resource || !block) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Resource not found</h2>
          <p className="text-zinc-400 mb-4">
            Params: {tag2} / {name}
          </p>
          <Link
            to="/"
            className="text-doreturn-gold hover:text-doreturn-gold/80 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="lg:max-w-4xl sm:max-w-full mx-auto px-4 py-4 sm:py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-4 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Resources
        </Link>

        <div className="bg-zinc-900/50 rounded-2xl border border-doreturn-gold/30 p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
            <div className="bg-zinc-800 p-2 rounded-xl">
              <img
                src={resource.favicon}
                alt=""
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                {resource.name}
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg mb-4">
                {resource.description}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-doreturn-gold to-doreturn-grey text-white font-medium py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Visit Resource
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
