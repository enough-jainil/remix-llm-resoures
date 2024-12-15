import { Search, X } from "lucide-react";
import { useSearch } from "~/context/SearchContext";
import { useCallback, useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import { useNavigate } from "@remix-run/react";
import { useGlobalSearch, GlobalSearchResult } from "~/hooks/useGlobalSearch";

export default function SearchBar() {
  const { setSearchQuery } = useSearch();
  const { searchAllResources } = useGlobalSearch();
  const [localValue, setLocalValue] = useState("");
  const [suggestions, setSuggestions] = useState<GlobalSearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const debouncedSearch = useCallback(
    debounce(async (value: string) => {
      setIsLoading(true);
      try {
        const results = searchAllResources(value);
        setSuggestions(results);
        setSearchQuery(value.toLowerCase().trim());
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [searchAllResources, setSearchQuery]
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
        navigate(
          `/resource/${encodeURIComponent(tag)}/${encodeURIComponent(
            suggestion.name
          )}`
        );
      }
      setLocalValue(suggestion.name);
      setSearchQuery(suggestion.name.toLowerCase());
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: GlobalSearchResult) => {
    if (suggestion.type === "resource" && suggestion.link) {
      const resourceId = suggestion.id || "1";
      const tag = suggestion.tag2 || suggestion.tag || "default";
      navigate(
        `/resource/${encodeURIComponent(tag)}/${encodeURIComponent(
          suggestion.name
        )}`
      );
    }
    setLocalValue(suggestion.name);
    setSearchQuery(suggestion.name.toLowerCase());
    setShowSuggestions(false);
  };

  return (
    <div
      className="flex items-center max-w-2xl mx-auto relative"
      ref={searchRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
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
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <div className="flex items-center gap-3">
                {suggestion.favicon && (
                  <div className="bg-zinc-800/50 p-1.5 rounded-lg">
                    <img
                      src={suggestion.favicon}
                      alt=""
                      className="w-5 h-5 rounded"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-medium truncate group-hover:text-doreturn-gold/90">
                      {suggestion.name}
                    </h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-400 whitespace-nowrap">
                      {suggestion.type === "resource"
                        ? suggestion.category
                        : "Category"}
                    </span>
                  </div>
                  {suggestion.description && (
                    <p className="text-zinc-400 text-sm line-clamp-1 mt-0.5">
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
