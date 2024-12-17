import { resourceBlocks } from "~/data/resources";
export const routes = {
  resourceDetail: (tag: string, tag2: string | undefined, name: string) => {
    const block = resourceBlocks.find(
      (block) =>
        block.tag === tag && (block.tag2 === tag2 || !tag2) && block.title
    );
    const slugifiedTitle = block?.title.toLowerCase().replace(/\s+/g, "-");
    const slugifiedTag = (tag2 || tag).toLowerCase().replace(/\s+/g, "-");
    const slugifiedName = name.toLowerCase().replace(/\s+/g, "-");

    return `/${slugifiedTitle}/${slugifiedTag}/${slugifiedName}`;
  },
};
