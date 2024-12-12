import { useCallback } from "react";
import { resourceBlocks } from "~/data/resources";

export interface GlobalSearchResult {
  type: "resource" | "category";
  name: string;
  description?: string;
  link?: string;
  tag?: string;
  tag2?: string;
  id?: number;
  favicon?: string;
  category?: string;
}

export function useGlobalSearch() {
  const searchAllResources = useCallback(
    (searchTerm: string): GlobalSearchResult[] => {
      if (!searchTerm.trim()) return [];

      const term = searchTerm.toLowerCase();
      const results: GlobalSearchResult[] = [];
      const seenNames = new Set();

      resourceBlocks.forEach((block) => {
        // Search in category
        if (
          block.title.toLowerCase().includes(term) ||
          block.description.toLowerCase().includes(term)
        ) {
          const result = {
            type: "category" as const,
            name: block.title,
            description: block.description,
            category: block.tag,
          };
          if (!seenNames.has(result.name)) {
            results.push(result);
            seenNames.add(result.name);
          }
        }

        // Search in resources
        block.resources.forEach((resource) => {
          if (
            resource.name.toLowerCase().includes(term) ||
            resource.description?.toLowerCase().includes(term) ||
            resource.description2?.toLowerCase().includes(term)
          ) {
            const result = {
              type: "resource" as const,
              name: resource.name,
              description: resource.description,
              link: resource.link,
              tag: block.tag,
              tag2: block.tag2,
              id: resource.id,
              favicon: resource.favicon,
              category: block.title,
            };
            if (!seenNames.has(result.name)) {
              results.push(result);
              seenNames.add(result.name);
            }
          }
        });
      });

      // Sort results by relevance and return top 8
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
        .slice(0, 8);
    },
    []
  );

  return { searchAllResources };
}
