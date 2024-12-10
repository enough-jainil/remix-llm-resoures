import { useCategory } from "~/context/CategoryContext";
import { resourceBlocks } from "~/data/resources";

const getCategories = () => {
  // Get unique tags from resourceBlocks
  const tags = [...new Set(resourceBlocks.map((block) => block.tag))].filter(
    Boolean
  );

  return [
    { id: "all", label: "View All" },
    ...tags.map((tag) => ({
      id: tag,
      label: tag,
    })),
  ];
};

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const categories = getCategories();

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
            selectedCategory === category.id
              ? "bg-doreturn-gold text-black"
              : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
