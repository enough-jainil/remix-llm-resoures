import { ResourceBlockProps } from "~/types/resource";
import { useSearch } from "~/context/SearchContext";
import { useCategory } from "~/context/CategoryContext";
import ViewAll from "./ViewAll";
import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import { routes } from "~/utils/routes";
import { resourceBlocks } from "~/data/resources";
import { FiLoader } from "react-icons/fi";
import { searchAllResources } from "~/hooks/useGlobalSearch";

const ResourceBlock = ({
  title,
  description,
  resources,
  tag,
  tag2,
}: ResourceBlockProps) => {
  const { searchQuery } = useSearch();
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  const filteredResources = searchQuery
    ? searchAllResources(searchQuery)
        .filter(
          (result) => result.type === "resource" && result.category === title
        )
        .map((result) => resources.find((r) => r.name === result.name))
        .filter(Boolean)
    : resources;

  if (filteredResources.length === 0) {
    return <div>No resources found</div>;
  }

  const resourcesWithTag = filteredResources.map((resource) => ({
    ...resource,
    tag2: tag2 || tag,
    tag: tag,
  }));

  return (
    <>
      <div className="group bg-doreturn-grey/10 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-doreturn-gold/30 hover:border-doreturn-gold/50 transition-all duration-500 flex flex-col min-h-[300px]">
        <div className="mb-2 sm:mb-3">
          <h2 className="text-base sm:text-lg text-white font-medium tracking-tight">
            {title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 mb-3 sm:mb-4 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2 sm:space-y-2.5 overflow-y-auto pr-2 custom-scrollbar flex-grow max-h-[350px]">
          {filteredResources.map((resource) => (
            <li
              key={resource.id}
              className="flex items-center gap-3 text-zinc-300 hover:text-white transition-all ease-out duration-500 hover:-translate-y-1 hover:scale-[1.02] transform cursor-pointer"
            >
              <span className="text-zinc-500 text-sm min-w-[24px]">
                {resource.id}
              </span>
              <img
                src={resource.favicon}
                alt=""
                className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <Link
                to={routes.resourceDetail(tag, tag2, resource.name)}
                className="hover:text-white transition-all duration-500 text-sm"
              >
                {resource.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <button
            onClick={() => setIsViewAllOpen(true)}
            className="w-full py-2.5 px-4 bg-[#c5b358]/80 hover:bg-zinc-700/80 text-zinc-100 text-sm rounded-full transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600/50 hover:shadow-lg hover:shadow-zinc-900/20"
          >
            View All →
          </button>
        </div>
      </div>

      <ViewAll
        isOpen={isViewAllOpen}
        onClose={() => setIsViewAllOpen(false)}
        title={title}
        resources={resourcesWithTag}
      />
    </>
  );
};

export default function ResourceGrid() {
  const { selectedCategory } = useCategory();
  const { searchQuery } = useSearch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <FiLoader className="w-8 h-8 animate-spin text-doreturn-gold" />
      </div>
    );
  }

  const getDisplayBlocks = () => {
    let blocks = resourceBlocks;

    if (selectedCategory && selectedCategory !== "all") {
      const [mainTag, subTag, subSubTag] = selectedCategory.split("-");

      blocks = blocks.filter((block) => {
        if (subSubTag) {
          return (
            block.tag === mainTag &&
            block.tag2 === subTag &&
            block.tag3 === subSubTag
          );
        }
        if (subTag) {
          return block.tag === mainTag && block.tag2 === subTag;
        }
        return block.tag === mainTag;
      });
    }

    if (searchQuery) {
      const searchResults = searchAllResources(searchQuery);
      const matchingCategories = new Set(
        searchResults
          .filter((result) => result.type === "category")
          .map((result) => result.name)
      );

      blocks = blocks.filter(
        (block) =>
          matchingCategories.has(block.title) ||
          searchResults.some(
            (result) =>
              result.type === "resource" && result.category === block.title
          )
      );
    }

    return blocks;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12 max-w-7xl mx-auto px-4">
        {getDisplayBlocks().map((block, index) => (
          <ResourceBlock key={index} {...block} />
        ))}
      </div>
    </>
  );
}
