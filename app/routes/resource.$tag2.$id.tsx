import { useParams, Link } from "@remix-run/react";
import { resourceBlocks } from "~/data/resources";

export default function ResourceDetail() {
  const { tag2, id } = useParams();

  // Find the block with matching tag2 or fall back to tag
  const block = resourceBlocks.find(
    (block) => block.tag2 === tag2 || block.tag === tag2
  );

  // Find the resource in that block
  const resource = block?.resources.find((r) => r.id.toString() === id);

  if (!resource || !block) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Resource not found</h2>
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

  // Get the appropriate description
  const detailedDescription =
    block.tag2 === "Free Resources"
      ? resource.description2 || resource.description
      : resource.description;

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
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
          Back to Resources
        </Link>

        {/* Category Tag */}
        <div className="mb-6">
          <span className="bg-zinc-800/50 text-zinc-400 px-3 py-1 rounded-full text-sm">
            {block.tag2 || block.tag}
          </span>
        </div>

        {/* Main Content */}
        <div className="bg-zinc-900/50 rounded-2xl border border-doreturn-gold/30 p-8">
          {/* Rest of your existing content */}
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-zinc-800 p-4 rounded-xl">
              <img
                src={resource.favicon}
                alt=""
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-white mb-4">
                {resource.name}
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {detailedDescription}
              </p>
            </div>
          </div>

          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-doreturn-gold to-doreturn-grey text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
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
  );
}
