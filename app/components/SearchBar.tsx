import { Search } from "lucide-react";
import { useSearch } from "~/context/SearchContext";
import { useCallback, useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import { resourceBlocks } from "~/data/resources";
import { motion, AnimatePresence } from "framer-motion";

interface SearchSuggestion {
  type: "resource" | "category";
  name: string;
  description?: string;
  link?: string;
}

export default function SearchBar() {
  const { setSearchQuery } = useSearch();
  const [localValue, setLocalValue] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Generate search suggestions
  const generateSuggestions = (value: string): SearchSuggestion[] => {
    if (!value.trim()) return [];

    const searchTerm = value.toLowerCase();
    const results: SearchSuggestion[] = [];
    const seenNames = new Set(); // To prevent duplicate suggestions

    // Search through resource blocks
    resourceBlocks.forEach((block) => {
      // Add matching categories
      if (block.title.toLowerCase().includes(searchTerm)) {
        const suggestion = {
          type: "category",
          name: block.title,
          description: block.description,
        };
        if (!seenNames.has(suggestion.name)) {
          results.push(suggestion);
          seenNames.add(suggestion.name);
        }
      }

      // Add matching resources
      block.resources.forEach((resource) => {
        if (
          resource.name.toLowerCase().includes(searchTerm) ||
          resource.description?.toLowerCase().includes(searchTerm)
        ) {
          const suggestion = {
            type: "resource",
            name: resource.name,
            description: resource.description,
            link: resource.link,
          };
          if (!seenNames.has(suggestion.name)) {
            results.push(suggestion);
            seenNames.add(suggestion.name);
          }
        }
      });
    });

    // Return top 5 most relevant results
    return results.slice(0, 5);
  };

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      const newSuggestions = generateSuggestions(value);
      setSuggestions(newSuggestions);
      setSearchQuery(value.toLowerCase().trim());
    }, 300),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalValue(value);
    debouncedSearch(value);
    setShowSuggestions(true);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex items-center max-w-2xl mx-auto relative"
      ref={searchRef}
    >
      <div className="relative w-full group">
        <input
          type="text"
          value={localValue}
          onChange={handleSearch}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search resources..."
          className="w-full px-6 py-3.5 pl-12 text-white bg-[#1A1A1A]/90 backdrop-blur-xl rounded-full border border-doreturn-gold/30 focus:border-doreturn-gold/50 focus:outline-none transition-all duration-300 text-base hover:border-doreturn-gold/40"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-doreturn-gold/60 h-5 w-5 group-hover:text-doreturn-gold/80 transition-colors duration-300" />
      </div>

      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A1A]/95 backdrop-blur-xl rounded-xl border border-doreturn-gold/20 shadow-2xl z-50 overflow-hidden"
          >
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={`${suggestion.type}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`
                  p-4 cursor-pointer transition-all duration-200 border-b border-doreturn-gold/10 last:border-none
                  hover:bg-doreturn-gold/10 group
                `}
                onClick={() => {
                  if (suggestion.type === "resource" && suggestion.link) {
                    window.open(suggestion.link, "_blank");
                  }
                  setLocalValue(suggestion.name);
                  setSearchQuery(suggestion.name.toLowerCase());
                  setShowSuggestions(false);
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-1 ${
                      suggestion.type === "category"
                        ? "text-doreturn-gold"
                        : "text-doreturn-gold group-hover:text-doreturn-gold"
                    }`}
                  >
                    {suggestion.type === "category" ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-base group-hover:text-doreturn-gold/90 transition-colors">
                      {suggestion.name}
                    </h4>
                    {suggestion.description && (
                      <p className="text-zinc-300 text-sm mt-1 line-clamp-2 group-hover:text-zinc-200 transition-colors">
                        {suggestion.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
