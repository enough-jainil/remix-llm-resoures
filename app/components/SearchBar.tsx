import { Search } from "lucide-react";
import { useSearch } from "~/context/SearchContext";
import { useCallback, useState } from "react";
import debounce from "lodash/debounce";

export default function SearchBar() {
  const { setSearchQuery } = useSearch();
  const [localValue, setLocalValue] = useState("");

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchQuery(value.toLowerCase().trim());
    }, 300),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalValue(value);
    debouncedSearch(value);
  };

  return (
    <div className="flex items-center max-w-2xl mx-auto">
      <div className="relative w-full group">
        <input
          type="text"
          value={localValue}
          onChange={handleSearch}
          placeholder="Search resources..."
          className="w-full px-6 py-3.5 pl-12 text-doreturn-grey-200 bg-doreturn-grey/10 backdrop-blur-sm rounded-full border border-doreturn-gold/30 focus:border-doreturn-gold/50 focus:outline-none transition-all duration-300 text-base hover:border-doreturn-gold/40"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 h-5 w-5 group-hover:text-zinc-400 transition-colors duration-300" />
      </div>
    </div>
  );
}
