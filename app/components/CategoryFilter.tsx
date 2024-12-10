import { useCategory } from "~/context/CategoryContext";

const categories = [
  { id: "all", label: "View All" },
  { id: "learning", label: "Learning Resources" },
  { id: "models", label: "LLM Models" },
  { id: "apps", label: "AI Applications" },
];

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`w-full sm:w-auto px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base whitespace-nowrap  ${
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
