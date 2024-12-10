import CategoryFilter from "~/components/CategoryFilter";
import ResourceGrid from "~/components/ResourceGrid";

export default function Resources() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          AI Insights Hub
        </h1>
        <p className="text-zinc-400 text-center mb-8">
          Your one-stop destination for all the resources you need to excel in
          your LLM journey.
        </p>
        <CategoryFilter />
        <ResourceGrid />
      </div>
    </div>
  );
}
