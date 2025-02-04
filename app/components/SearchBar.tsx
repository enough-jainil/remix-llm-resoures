import { Search, X } from "lucide-react";
import { useSearch } from "~/context/SearchContext";
import { useCallback, useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import { useNavigate } from "@remix-run/react";
import {
  searchAllResources,
  type GlobalSearchResult,
} from "~/hooks/useGlobalSearch";
import { routes } from "~/utils/routes";

// Main SearchBar component for searching resources
export default function SearchBar() {
  const { setSearchQuery } = useSearch();
  const [localValue, setLocalValue] = useState("");
  const [suggestions, setSuggestions] = useState<GlobalSearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      if (!value.trim()) {
        setSuggestions([]);
        setSearchQuery("");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const results = searchAllResources(value);
        setSuggestions(results);
        setSearchQuery(value.toLowerCase().trim());
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [setSearchQuery]
  );

  // Cleanup function to cancel debounced search on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel(); // Cancel the debounced search on component unmount
    };
  }, [debouncedSearch]);

  // Handle input change and trigger search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalValue(value); // Update local input value
    debouncedSearch(value); // Trigger debounced search
    setShowSuggestions(true); // Show suggestions
  };

  // Clear the search input and suggestions
  const clearSearch = () => {
    setLocalValue(""); // Reset local value
    setSearchQuery(""); // Clear global search query
    setSuggestions([]); // Clear suggestions
    setShowSuggestions(false); // Hide suggestions
  };

  // Close suggestions when clicking outside the search bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false); // Hide suggestions
        setSelectedIndex(-1); // Reset selected index
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Add event listener for clicks
    return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener on unmount
  }, []);

  // Handle keyboard navigation for suggestions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev < suggestions.length - 1 ? prev + 1 : 0) // Move down in suggestions
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev > 0 ? prev - 1 : suggestions.length - 1) // Move up in suggestions
        );
        break;

      case "Enter":
        if (selectedIndex >= 0) {
          e.preventDefault();
          const suggestion = suggestions[selectedIndex];
          handleSuggestionSelect(suggestion); // Select suggestion
        }
        break;

      case "Escape":
        e.preventDefault();
        clearSearch(); // Clear search on escape
        break;
    }

    // Scroll selected item into view
    const selectedElement = document.querySelector(
      `[data-index="${selectedIndex}"]`
    );
    selectedElement?.scrollIntoView({ block: "nearest" });
  };

  // Handle click on a suggestion
  const handleSuggestionClick = (suggestion: GlobalSearchResult) => {
    if (suggestion.type === "resource") {
      navigate(
        routes.resourceDetail(
          suggestion.tag || "",
          suggestion.tag2,
          suggestion.name
        )
      );
    } else if (suggestion.type === "category") {
      // Handle category click by setting the search query to filter by category
      setSearchQuery(suggestion.name.toLowerCase());
      setLocalValue(suggestion.name);
    }
    setShowSuggestions(false);
  };

  return (
    <div
      className="flex items-center max-w-2xl mx-auto relative"
      ref={searchRef}
      onKeyDown={handleKeyDown} // Handle keyboard navigation
      tabIndex={0}
    >
      <div className="relative w-full group">
        <input
          type="text"
          value={localValue}
          onChange={handleSearch} // Trigger search on input change
          onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
          placeholder="Search resources..."
          className="w-full px-6 py-3.5 pl-12 text-text-primary bg-bg-primary backdrop-blur-xl rounded-full border border-doreturn-gold/30 focus:border-doreturn-gold/50 focus:outline-none transition-all duration-300 text-base hover:border-doreturn-gold/40"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-doreturn-gold/60 h-5 w-5 group-hover:text-doreturn-gold/80 transition-colors duration-300" />
        {localValue && (
          <button
            onClick={clearSearch} // Clear search on button click
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-doreturn-gold/60 hover:text-doreturn-gold/80 transition-colors duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-bg-primary backdrop-blur-xl rounded-xl border border-border-primary shadow-2xl z-50 overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <div
              key={`${suggestion.type}-${index}`}
              className={`p-4 transition-all duration-200 border-b border-doreturn-gold/10 
                last:border-none hover:bg-doreturn-gold/10 group
                ${selectedIndex === index ? "bg-doreturn-gold/10" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => handleSuggestionClick(suggestion)} // Handle suggestion click
            >
              <div className="flex items-center gap-3">
                {suggestion.favicon && (
                  <div className="bg-zinc-800/50 p-1.5 rounded-lg">
                    <img
                      src={suggestion.favicon}
                      alt=""
                      className="w-5 h-5 rounded"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"; // Hide image on error
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
