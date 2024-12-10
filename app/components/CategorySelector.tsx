import { useCategory } from "~/context/CategoryContext";
import { resourceBlocks } from "~/data/resources";

export default function CategorySelector() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto mt-8">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
          selectedCategory === null
            ? "bg-doreturn-gold/20 text-doreturn-gold border-doreturn-gold/50"
            : "bg-doreturn-grey/10 text-doreturn-grey border-doreturn-grey/30 hover:border-doreturn-gold/30"
        } border`}
      >
        All
      </button>
      {resourceBlocks.map((block) => (
        <button
          key={block.title}
          onClick={() => setSelectedCategory(block.title)}
          className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
            selectedCategory === block.title
              ? "bg-doreturn-gold/20 text-doreturn-gold border-doreturn-gold/50"
              : "bg-doreturn-grey/10 text-doreturn-grey border-doreturn-grey/30 hover:border-doreturn-gold/30"
          } border`}
        >
          {block.title}
        </button>
      ))}
    </div>
  );
}
