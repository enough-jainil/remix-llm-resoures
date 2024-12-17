import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the category context, including the selected category and a function to update it
type CategoryContextType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

// Create a context for managing category state, initialized to undefined
const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

// Provider component that wraps children and provides category state
export function CategoryProvider({ children }: { children: ReactNode }) {
  // State to hold the currently selected category, defaulting to "all"
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    // Provide the selected category and the function to update it to the context
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

// Custom hook to use the CategoryContext, ensuring it's used within a provider
export function useCategory() {
  const context = useContext(CategoryContext);
  // Throw an error if the context is undefined, indicating the hook is used outside of a provider
  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
