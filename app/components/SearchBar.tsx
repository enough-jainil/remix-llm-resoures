import { Search, X } from "lucide-react";
import { useSearch } from "~/context/SearchContext";
import { useCallback, useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import { resourceBlocks } from "~/data/resources";
import { useNavigate } from "@remix-run/react";

interface SearchSuggestion {
  type: "resource" | "category";
  name: string;
  description?: string;
  link?: string;
  tag?: string;
  tag2?: string;
  id?: number;
  favicon?: string;
}

export default function SearchBar() {
  const { setSearchQuery } = useSearch();
  const [localValue, setLocalValue] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Generate search suggestions with improved logic
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
          type: "category" as const,
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
        const resourceMatch =
          resource.name.toLowerCase().includes(searchTerm) ||
          resource.description?.toLowerCase().includes(searchTerm);
        if (resourceMatch) {
          const suggestion = {
            type: "resource" as const,
            name: resource.name,
            description: resource.description,
            link: resource.link,
            tag: block.tag,
            tag2: block.tag2,
            id: resource.id,
            favicon: resource.favicon,
          };
          if (!seenNames.has(suggestion.name)) {
            results.push(suggestion);
            seenNames.add(suggestion.name);
          }
        }
      });
    });

    // Sort results by relevance (length of match) and return top 5
    results.sort((a, b) => {
      const aMatchIndex = a.name.toLowerCase().indexOf(searchTerm);
      const bMatchIndex = b.name.toLowerCase().indexOf(searchTerm);
      return aMatchIndex - bMatchIndex;
    });

    return results.slice(0, 5);
  };

  const debouncedSearch = useCallback(
    debounce(async (value: string) => {
      setIsLoading(true);
      try {
        const newSuggestions = generateSuggestions(value);
        setSuggestions(newSuggestions);
        setSearchQuery(value.toLowerCase().trim());
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalValue(value);
    debouncedSearch(value);
    setShowSuggestions(true);
  };

  const clearSearch = () => {
    setLocalValue("");
    setSearchQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const suggestion = suggestions[selectedIndex];
      if (suggestion.type === "resource" && suggestion.link) {
        const resourceId = suggestion.id || "1";
        const tag = suggestion.tag2 || suggestion.tag || "default";
        navigate(`/resource/${encodeURIComponent(tag)}/${resourceId}`);
      }
      setLocalValue(suggestion.name);
      setSearchQuery(suggestion.name.toLowerCase());
      setShowSuggestions(false);
    }
  };

  return (
    <div
      className="flex items-center max-w-2xl mx-auto relative"
      ref={searchRef}
      onKeyDown={handleKeyDown} // Added keydown event listener to the main div
      tabIndex={0} // Make the div focusable
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
        {localValue && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-doreturn-gold/60 hover:text-doreturn-gold/80 transition-colors duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A1A]/95 backdrop-blur-xl rounded-xl border border-doreturn-gold/20 shadow-2xl z-50 overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <div
              key={`${suggestion.type}-${index}`}
              className={`p-4 transition-all duration-200 border-b border-doreturn-gold/10 
                last:border-none hover:bg-doreturn-gold/10 group
                ${selectedIndex === index ? "bg-doreturn-gold/10" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => {
                if (suggestion.type === "resource" && suggestion.link) {
                  const resourceId = suggestion.id || "1";
                  const tag = suggestion.tag2 || suggestion.tag || "default";
                  navigate(
                    `/resource/${encodeURIComponent(tag)}/${resourceId}`
                  );
                }
                setLocalValue(suggestion.name);
                setSearchQuery(suggestion.name.toLowerCase());
                setShowSuggestions(false);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (suggestion.type === "resource" && suggestion.link) {
                    const resourceId = suggestion.id || "1";
                    const tag = suggestion.tag2 || suggestion.tag || "default";
                    navigate(
                      `/resource/${encodeURIComponent(tag)}/${resourceId}`
                    );
                  }
                  setLocalValue(suggestion.name);
                  setSearchQuery(suggestion.name.toLowerCase());
                  setShowSuggestions(false);
                }
              }}
            >
              <div className="flex items-center gap-3">
                {suggestion.favicon && (
                  <img
                    src={suggestion.favicon}
                    alt=""
                    className="w-6 h-6 rounded"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                <div className="flex-1">
                  <h4 className="text-white font-medium group-hover:text-doreturn-gold/90">
                    {suggestion.name}
                  </h4>
                  {suggestion.description && (
                    <p className="text-zinc-400 text-sm line-clamp-1">
                      {suggestion.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
