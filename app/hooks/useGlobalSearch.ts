// This hook provides a global search functionality for resources and categories.
// It defines the structure of search results and implements a search algorithm
// that filters resources based on a search term.

import { useCallback } from "react";
import { resourceBlocks } from "~/data/resources";

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

// Custom hook for global search functionality
export function useGlobalSearch() {
  // Function to search all resources based on the provided search term
  const searchAllResources = useCallback(
    (searchTerm: string): GlobalSearchResult[] => {
      // Return an empty array if the search term is empty or only whitespace
      if (!searchTerm.trim()) return [];

      const term = searchTerm.toLowerCase(); // Normalize the search term to lowercase
      const results: GlobalSearchResult[] = []; // Array to store search results
      const seenNames = new Set(); // Set to track unique names to avoid duplicates

      // Iterate through each resource block to search for matches
      resourceBlocks.forEach((block) => {
        // Search in category titles and descriptions
        if (
          block.title.toLowerCase().includes(term) ||
          block.description.toLowerCase().includes(term)
        ) {
          const result = {
            type: "category" as const, // Mark result as a category type
            name: block.title,
            description: block.description,
            category: block.tag,
          };
          // Add result if it hasn't been seen before
          if (!seenNames.has(result.name)) {
            results.push(result);
            seenNames.add(result.name);
          }
        }

        // Search in resources within the block
        block.resources.forEach((resource) => {
          if (
            resource.name.toLowerCase().includes(term) ||
            resource.description?.toLowerCase().includes(term) ||
            resource.description2?.toLowerCase().includes(term) || // Ensure description2 is included in the search
            resource.link.toLowerCase().includes(term) // Added link search
          ) {
            const result = {
              type: "resource" as const, // Mark result as a resource type
              name: resource.name,
              description: resource.description,
              description2: resource.description2, // Added description2 to the result
              link: resource.link,
              tag: block.tag,
              tag2: block.tag2,
              id: resource.id,
              favicon: resource.favicon,
              category: block.title,
            };
            // Add result if it hasn't been seen before
            if (!seenNames.has(result.name)) {
              results.push(result);
              seenNames.add(result.name);
            }
          }
        });
      });

      // Sort results by relevance and return the top 8
      return results
        .sort((a, b) => {
          const aNameMatch = a.name.toLowerCase().indexOf(term);
          const bNameMatch = b.name.toLowerCase().indexOf(term);

          // Prioritize exact matches in name
          if (aNameMatch === 0 && bNameMatch !== 0) return -1;
          if (bNameMatch === 0 && aNameMatch !== 0) return 1;

          // Then sort by match position
          return aNameMatch - bNameMatch;
        })
        .slice(0, 8); // Limit results to the top 8 matches
    },
    [] // Dependency array for useCallback
  );

  return { searchAllResources }; // Expose the search function
}
