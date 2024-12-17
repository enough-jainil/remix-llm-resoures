import { resourceBlocks } from "~/data/resources";

// Define routes for the application
export const routes = {
  // Generate a resource detail URL based on the provided tags and name
  resourceDetail: (tag: string, tag2: string | undefined, name: string) => {
    // Find the resource block that matches the provided tag and optional tag2
    const block = resourceBlocks.find(
      (block) =>
        block.tag === tag && (block.tag2 === tag2 || !tag2) && block.title
    );

    // Create slugified versions of the title, tag, and name for the URL
    const slugifiedTitle = block?.title.toLowerCase().replace(/\s+/g, "-");
    const slugifiedTag = (tag2 || tag).toLowerCase().replace(/\s+/g, "-");
    const slugifiedName = name.toLowerCase().replace(/\s+/g, "-");

    // Return the constructed URL path
    return `/${slugifiedTitle}/${slugifiedTag}/${slugifiedName}`;
  },
};
