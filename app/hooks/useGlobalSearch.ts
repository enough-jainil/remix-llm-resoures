import { resourceBlocks } from "~/data/resources";
import Fuse from "fuse.js";
import type { GlobalSearchResult } from "~/types/resource";
import { useMemo } from "react";

// Prepare search data by flattening resource blocks into a single array
const searchData: GlobalSearchResult[] = resourceBlocks.flatMap((block) => [
  {
    type: "category",
    name: block.title,
    description: block.description,
    category: block.tag,
  },
  ...(block.resources ?? []).map((resource) => ({
    type: "resource",
    name: resource.name,
    description: resource.description,
    description2: resource.description2,
    link: resource.link,
    tag: block.tag,
    tag2: block.tag2,
    tag3: block.tag3,
    id: resource.id,
    favicon: resource.favicon,
    category: block.title,
  })),
]);

// Initialize Fuse.js for fuzzy searching through the search data
const fuse = new Fuse(searchData, {
  keys: [
    "name",
    "description",
    "description2",
    "category",
    "tag",
    "tag2",
    "tag3",
    "links",
  ],
  threshold: 0.3, // Set the threshold for search accuracy
  includeScore: true, // Include score in search results for ranking
  minMatchCharLength: 2, // Minimum length of characters to match
  useExtendedSearch: true, // Enable extended search features
});

// Memoize search results
const useGlobalSearch = (query: string) => {
  const memoizedResults = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).slice(0, 10); // Limit results
  }, [query]);

  return memoizedResults;
};

// Function to search all resources based on the search term
export const searchAllResources = (
  searchTerm: string
): GlobalSearchResult[] => {
  if (!searchTerm.trim()) return []; // Return empty array if search term is empty
  return fuse
    .search(searchTerm) // Perform the search using Fuse.js
    .slice(0, 8) // Limit results to the top 8 matches
    .map((result) => result.item); // Extract the item from the search result
};
