import { useCategory } from "~/context/CategoryContext";
import { resourceBlocks } from "~/data/resources";

const getCategories = () => {
  // Get unique main tags and their sub-tags
  const categories = resourceBlocks.reduce((acc, block) => {
    if (!acc[block.tag]) {
      acc[block.tag] = new Set();
    }
    if (block.tag2) {
      acc[block.tag].add(block.tag2);
    }
    return acc;
  }, {});

  // Convert to array format with sub-categories
  const categoryArray = Object.entries(categories).map(([tag, subTags]) => ({
    id: tag,
    label: tag,
    subCategories: Array.from(subTags).map((subTag) => ({
      id: `${tag}-${subTag}`,
      label: subTag,
    })),
  }));

  return [{ id: "all", label: "View All" }, ...categoryArray];
};

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const categories = getCategories();

  const [mainCategory, subCategory] = (selectedCategory || "").split("-");

  return (
    <div className="flex flex-col space-y-4">
      {/* Main categories */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
              selectedCategory === category.id || mainCategory === category.id
                ? "bg-doreturn-gold text-black"
                : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Sub-categories with horizontal scroll */}
      {mainCategory !== "all" &&
        categories.find((c) => c.id === mainCategory)?.subCategories?.length >
          0 && (
          <div className="flex justify-center">
            <div className="overflow-x-auto max-w-full pb-2">
              <div className="flex gap-2 px-4 mx-auto justify-center min-w-max">
                {categories
                  .find((c) => c.id === mainCategory)
                  ?.subCategories.map((subCat) => (
                    <button
                      key={subCat.id}
                      onClick={() => setSelectedCategory(subCat.id)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 text-sm whitespace-nowrap ${
                        selectedCategory === subCat.id
                          ? "bg-doreturn-gold/20 text-doreturn-gold"
                          : "bg-zinc-800/30 text-zinc-500 hover:bg-zinc-700/30 hover:text-zinc-300"
                      }`}
                    >
                      {subCat.label}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
