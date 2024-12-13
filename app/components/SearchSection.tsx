import { useState, useContext } from "react";
import { SearchContext } from "~/context/SearchContext";
import SearchBar from "./SearchBar";

const categories = [
  "All",
  "Free Resources",
  "Video Tutorials",
  "Courses",
  "Papers",
  "GitHub",
  "Datasets",
  "Apps",
  "AI",
  "AI Agents",
  "AI Agents",
];

export default function SearchSection() {
  const { setSearchQuery } = useContext(SearchContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Optionally filter results based on category
    setSearchQuery(""); // Reset search when changing category
  };

  return (
    <div className="space-y-8">
      <div className="min-h-[48px]">
        <SearchBar />
      </div>

      <div className="flex justify-center">
        <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar max-w-4xl">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`
                px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 border-blue-500/50"
                    : "bg-zinc-800/50 text-gray-300 hover:text-white hover:bg-zinc-700/50 border-zinc-700/50"
                }
                border hover:border-zinc-600/50
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
