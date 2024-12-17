// Import necessary hooks and resource data
import { useCategory } from "~/context/CategoryContext";
import { resourceBlocks } from "~/data/resources";

// CategorySelector component for rendering category buttons
export default function CategorySelector() {
  // Get the currently selected category and the function to update it
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto mt-8">
      <button
        onClick={() => setSelectedCategory(null)} // Set selected category to null when "All" is clicked
        className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
          selectedCategory === null
            ? "bg-doreturn-gold/20 text-doreturn-gold border-doreturn-gold/50" // Styles for selected "All" category
            : "bg-doreturn-grey/10 text-doreturn-grey border-doreturn-grey/30 hover:border-doreturn-gold/30" // Styles for unselected state
        } border`}
      >
        All
      </button>
      {resourceBlocks.map((block) => (
        <button
          key={block.title} // Unique key for each button based on block title
          onClick={() => setSelectedCategory(block.title)} // Set selected category to the block title when clicked
          className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
            selectedCategory === block.title
              ? "bg-doreturn-gold/20 text-doreturn-gold border-doreturn-gold/50" // Styles for selected category
              : "bg-doreturn-grey/10 text-doreturn-grey border-doreturn-grey/30 hover:border-doreturn-gold/30" // Styles for unselected state
          } border`}
        >
          {block.title} {/* Display the title of the resource block */}
        </button>
      ))}
    </div>
  );
}
