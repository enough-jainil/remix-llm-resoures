import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the search context, including the search query and a function to update it
interface SearchContextType {
  searchQuery: string; // Current search query
  setSearchQuery: (query: string) => void; // Function to update the search query
}

// Create a context for managing search state, initialized to undefined
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Provider component that wraps children and provides search state
export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the current search query

  return (
    // Provide the search query and the function to update it to the context
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook to use the SearchContext, ensuring it's used within a provider
export function useSearch() {
  const context = useContext(SearchContext); // Access the search context
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider"); // Error if used outside of provider
  }
  return context; // Return the context
}
