// Import required dependencies
import { resourceBlocks } from "~/data/resources";
import Fuse from "fuse.js"; // Fuzzy search library

// Interface defining the structure of search results
// Can be either a resource or category type with optional fields
export interface GlobalSearchResult {
  type: "resource" | "category"; // Discriminator for result type
  name: string;
  description?: string; // Short description
  description2?: string; // Detailed description
  link?: string; // Resource URL
  tag?: string; // Primary category tag
  tag2?: string; // Secondary category tag
  tag3?: string; // Tertiary category tag
  id?: number;
  favicon?: string; // Resource favicon URL
  category?: string; // Category name
}

// Prepare the search data once
const searchData: GlobalSearchResult[] = resourceBlocks.flatMap((block) => [
  {
    type: "category",
    name: block.title,
    description: block.description,
    category: block.tag,
  },
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
]);

// Initialize Fuse instance once
const fuse = new Fuse(searchData, {
  keys: ["name", "description", "description2", "category", "tag", "tag2", "tag3","links"],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2,
});

// Export the search function directly
export const searchAllResources = (
  searchTerm: string
): GlobalSearchResult[] => {
  if (!searchTerm.trim()) return [];
  return fuse
    .search(searchTerm)
    .slice(0, 8)
    .map((result) => result.item);
};
