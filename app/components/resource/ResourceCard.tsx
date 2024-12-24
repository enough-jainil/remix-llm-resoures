import { Link } from "@remix-run/react";
import { Resource } from "~/types/resource";
import { FaArrowRight, FaAngleLeft, FaShare } from "react-icons/fa";
import { useState } from "react";

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = `Check out ${resource.name} on AI Insights Hub`;
    const shareText = resource.description || "";

    try {
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="lg:max-w-4xl sm:max-w-full mx-auto px-4 py-4 sm:py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-4 transition-colors"
      >
        <FaAngleLeft className="w-5 h-5" />
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
            <div className="flex gap-3">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-doreturn-gold to-doreturn-grey text-white font-medium py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Visit Resource
                <FaArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-zinc-800 text-white font-medium py-2 px-4 rounded-xl hover:bg-zinc-700 transition-all duration-300"
              >
                Share
                <FaShare className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {showShareToast && (
        <div className="fixed bottom-4 right-4 bg-doreturn-gold text-black px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          URL copied to clipboard!
        </div>
      )} */}
    </div>
  );
}
