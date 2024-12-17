import { useCategory } from "~/context/CategoryContext";
import { resourceBlocks } from "~/data/resources";

// Function to get categories and their sub-categories from resource blocks
const getCategories = () => {
  // Reduce resource blocks to create a structured categories object
  const categories = resourceBlocks.reduce((acc, block) => {
    // Initialize the main tag if it doesn't exist
    if (!acc[block.tag]) {
      acc[block.tag] = {
        subTags: new Set(), // Set to hold unique sub-tags
        subSubTags: new Map(), // Map to store sub-sub-tags for each sub-tag
      };
    }

    // Add sub-tag if it exists
    if (block.tag2) {
      acc[block.tag].subTags.add(block.tag2); // Add sub-tag to the set

      // Initialize sub-sub-tags Set for this sub-tag if it doesn't exist
      if (block.tag3) {
        if (!acc[block.tag].subSubTags.has(block.tag2)) {
          acc[block.tag].subSubTags.set(block.tag2, new Set()); // Create a new set for sub-sub-tags
        }
        acc[block.tag].subSubTags.get(block.tag2).add(block.tag3); // Add sub-sub-tag to the set
      }
    }

    return acc; // Return the accumulated categories object
  }, {});

  // Convert the categories object to an array format with sub-categories and sub-sub-categories
  const categoryArray = Object.entries(categories).map(
    ([tag, { subTags, subSubTags }]) => ({
      id: tag,
      label: tag,
      subCategories: Array.from(subTags).map((subTag) => ({
        id: `${tag}-${subTag}`, // Create a unique ID for the sub-category
        label: subTag,
        subSubCategories: Array.from(subSubTags.get(subTag) || []).map(
          (subSubTag) => ({
            id: `${tag}-${subTag}-${subSubTag}`, // Create a unique ID for the sub-sub-category
            label: subSubTag,
          })
        ),
      })),
    })
  );

  return [{ id: "all", label: "All" }, ...categoryArray]; // Return all categories including an "All" option
};

// Main component for rendering category filter
export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useCategory(); // Get selected category and setter from context
  const categories = getCategories(); // Retrieve categories
  const [mainCategory, subCategory, subSubCategory] = (
    selectedCategory || ""
  ).split("-"); // Split selected category into parts

  // Find the current main category based on selection
  const currentMainCategory = categories.find((c) => c.id === mainCategory);
  // Find the current sub-category based on selection
  const currentSubCategory = currentMainCategory?.subCategories?.find(
    (sc) => sc.id === `${mainCategory}-${subCategory}`
  );

  return (
    <div className="flex flex-col space-y-4 max-w-6xl mx-auto">
      {/* Main categories - Scrollable */}
      <div className="relative">
        <div className="overflow-x-auto pb-2 -mx-4 px-4 md:overflow-x-visible">
          <div className="flex flex-wrap gap-2 min-w-max md:min-w-0 justify-start md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)} // Set selected category on click
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm whitespace-nowrap ${
                  category.id === mainCategory
                    ? "bg-doreturn-gold text-black" // Highlight selected main category
                    : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-categories - Scrollable */}
      {currentMainCategory?.subCategories?.length > 0 && (
        <div className="relative">
          <div className="overflow-x-auto pb-2 -mx-4 px-4 md:overflow-x-visible">
            <div className="flex flex-wrap gap-2 min-w-max md:min-w-0 justify-start md:justify-center">
              {currentMainCategory.subCategories.map((subCat) => (
                <button
                  key={subCat.id}
                  onClick={() => setSelectedCategory(subCat.id)} // Set selected sub-category on click
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm whitespace-nowrap ${
                    subCat.id === `${mainCategory}-${subCategory}`
                      ? "bg-doreturn-gold/20 text-doreturn-gold" // Highlight selected sub-category
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

      {/* Sub-sub-categories - Scrollable */}
      {currentSubCategory?.subSubCategories?.length > 0 && (
        <div className="relative">
          <div className="overflow-x-auto pb-2 -mx-4 px-4 md:overflow-x-visible">
            <div className="flex flex-wrap gap-2 min-w-max md:min-w-0 justify-start md:justify-center">
              {currentSubCategory.subSubCategories.map((subSubCat) => (
                <button
                  key={subSubCat.id}
                  onClick={() => setSelectedCategory(subSubCat.id)} // Set selected sub-sub-category on click
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm whitespace-nowrap ${
                    subSubCat.id === selectedCategory
                      ? "bg-doreturn-gold/10 text-doreturn-gold" // Highlight selected sub-sub-category
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
