import { Link } from "@remix-run/react";
import { Resource } from "~/types/resource";
import { FaArrowRight, FaAngleLeft } from "react-icons/fa"; // Importing the FaArrowLeft, FaArrowRight, and FaAngleLeft icons from react-icons

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="lg:max-w-4xl sm:max-w-full mx-auto px-4 py-4 sm:py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-4 transition-colors"
      >
        <FaAngleLeft className="w-5 h-5" /> {/* Using the FaAngleLeft icon */}
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
              {resource.description2 || resource.description}
            </p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-doreturn-gold to-doreturn-grey text-white font-medium py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Visit Resource
              <FaArrowRight className="w-5 h-5" />
              {/* Using the FaArrowRight icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
