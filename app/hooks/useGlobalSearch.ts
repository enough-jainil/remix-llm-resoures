import { useCallback } from "react";
import { resourceBlocks } from "~/data/resources";
import Fuse from "fuse.js";

// Define the structure of a global search result, which can be either a resource or a category.
export interface GlobalSearchResult {
  type: "resource" | "category"; // Type of the search result
  name: string; // Name of the resource or category
  description?: string; // Short description of the resource or category
  description2?: string; // Detailed description for resources
  link?: string; // Link to the resource
  tag?: string; // Main tag associated with the resource
  tag2?: string; // Sub-tag associated with the resource
  tag3?: string; // Additional sub-tag associated with the resource
  id?: number; // Unique identifier for the resource
  favicon?: string; // Favicon associated with the resource
  category?: string; // Title of the category the resource belongs to
}

// Configure Fuse options for optimal fuzzy searching
const fuseOptions = {
  keys: ["name", "description", "description2", "link"],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2,
};

// Custom hook for global search functionality
export function useGlobalSearch() {
  // Function to search all resources based on the provided search term
  const searchAllResources = useCallback(
    (searchTerm: string): GlobalSearchResult[] => {
      // Return an empty array if the search term is empty or only whitespace
      if (!searchTerm.trim()) return [];

      // Prepare data for Fuse
      const searchData: GlobalSearchResult[] = resourceBlocks.flatMap(
        (block) => [
          // Add category
          {
            type: "category",
            name: block.title,
            description: block.description,
            category: block.tag,
          },
          // Add resources
          ...block.resources.map((resource) => ({
            type: "resource",
            name: resource.name,
            description: resource.description,
            description2: resource.description2,
            link: resource.link,
            tag: block.tag,
            tag2: block.tag2,
            id: resource.id,
            favicon: resource.favicon,
            category: block.title,
          })),
        ]
      );

      // Initialize Fuse with the prepared data
      const fuse = new Fuse(searchData, fuseOptions);

      // Perform the search and return top 8 results
      return fuse
        .search(searchTerm)
        .slice(0, 8)
        .map((result) => result.item);
    },
    [] // Dependency array for useCallback
  );

  return { searchAllResources }; // Expose the search function
}
