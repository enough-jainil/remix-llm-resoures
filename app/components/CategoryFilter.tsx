import { useCategory } from "~/context/CategoryContext";
import { resourceBlocks } from "~/data/resources";

const getCategories = () => {
  // Get unique main tags and their sub-tags and sub-sub-tags
  const categories = resourceBlocks.reduce((acc, block) => {
    if (!acc[block.tag]) {
      acc[block.tag] = {
        subTags: new Set(),
        subSubTags: new Map(), // Map to store sub-sub-tags for each sub-tag
      };
    }

    if (block.tag2) {
      acc[block.tag].subTags.add(block.tag2);

      // Initialize sub-sub-tags Set for this sub-tag if it doesn't exist
      if (block.tag3) {
        if (!acc[block.tag].subSubTags.has(block.tag2)) {
          acc[block.tag].subSubTags.set(block.tag2, new Set());
        }
        acc[block.tag].subSubTags.get(block.tag2).add(block.tag3);
      }
    }

    return acc;
  }, {});

  // Convert to array format with sub-categories and sub-sub-categories
  const categoryArray = Object.entries(categories).map(
    ([tag, { subTags, subSubTags }]) => ({
      id: tag,
      label: tag,
      subCategories: Array.from(subTags).map((subTag) => ({
        id: `${tag}-${subTag}`,
        label: subTag,
        subSubCategories: Array.from(subSubTags.get(subTag) || []).map(
          (subSubTag) => ({
            id: `${tag}-${subTag}-${subSubTag}`,
            label: subSubTag,
          })
        ),
      })),
    })
  );

  return [{ id: "all", label: "View All" }, ...categoryArray];
};

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const categories = getCategories();

  // Parse the current selection
  const [mainCategory, subCategory, subSubCategory] = (
    selectedCategory || ""
  ).split("-");

  // Find current main category object
  const currentMainCategory = categories.find((c) => c.id === mainCategory);

  // Find current sub-category object
  const currentSubCategory = currentMainCategory?.subCategories?.find(
    (sc) => sc.id === `${mainCategory}-${subCategory}`
  );

  return (
    <div className="flex flex-col space-y-4">
      {/* Main categories */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
              category.id === mainCategory
                ? "bg-doreturn-gold text-black"
                : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Sub-categories */}
      {currentMainCategory?.subCategories?.length > 0 && (
        <div className="flex justify-center">
          <div className="overflow-x-auto max-w-full pb-2">
            <div className="flex gap-2 px-4 mx-auto justify-center min-w-max">
              {currentMainCategory.subCategories.map((subCat) => (
                <button
                  key={subCat.id}
                  onClick={() => setSelectedCategory(subCat.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm whitespace-nowrap ${
                    subCat.id === `${mainCategory}-${subCategory}`
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

      {/* Sub-sub-categories */}
      {currentSubCategory?.subSubCategories?.length > 0 && (
        <div className="flex justify-center">
          <div className="overflow-x-auto max-w-full pb-2">
            <div className="flex gap-2 px-4 mx-auto justify-center min-w-max">
              {currentSubCategory.subSubCategories.map((subSubCat) => (
                <button
                  key={subSubCat.id}
                  onClick={() => setSelectedCategory(subSubCat.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm whitespace-nowrap ${
                    subSubCat.id === selectedCategory
                      ? "bg-doreturn-gold/10 text-doreturn-gold"
                      : "bg-zinc-800/20 text-zinc-500 hover:bg-zinc-700/20 hover:text-zinc-300"
                  }`}
                >
                  {subSubCat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
