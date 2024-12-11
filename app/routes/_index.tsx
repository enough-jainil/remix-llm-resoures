import type { MetaFunction } from "@remix-run/node";
import { SearchProvider } from "~/context/SearchContext";
import { CategoryProvider } from "~/context/CategoryContext";
import SearchBar from "~/components/SearchBar";
import CategoryFilter from "~/components/CategoryFilter";
import ResourceGrid from "~/components/ResourceGrid";
import ContactSection from "~/components/ContactSection";
import Skeleton from "react-loading-skeleton";

export const meta: MetaFunction = () => {
  return [
    { title: "MemoryView AI Resources Hub" },
    {
      name: "description",
      content:
        "MemoryView AI Resources Hub: Your go-to platform for cutting-edge Large Language Model (LLM) resources, in-depth tutorials, and powerful AI tools to accelerate your learning and projects.",
    },
    {
      name: "keywords",
      content:
        "LLM, Large Language Models, AI resources, Machine Learning tutorials, ChatGPT tutorials, AI courses, LLM Resources Hub, LLM Tools, LLM Tutorials, LLM Development, LLM Applications",
    },
    {
      property: "og:title",
      content: "MemoryView AI Resources Hub",
    },
    {
      property: "og:description",
      content:
        "MemoryView AI Resources Hub: Your go-to platform for cutting-edge Large Language Model (LLM) resources, in-depth tutorials, and powerful AI tools to accelerate your learning and projects.",
    },
    {
      property: "og:url",
      content: "https://memoryview.in",
    },
    {
      property: "og:image",
      content: "public/featuredimage.png", // Update with the actual path to your featured image
    },
  ];
};
export default function Index() {
  return (
    <CategoryProvider>
      <SearchProvider>
        {" "}
        <Skeleton />
        <div className="min-h-screen bg-[#1A1A1A] relative overflow-hidden">
          {" "}
          <Skeleton /> {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-doreturn-gold/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-doreturn-gold/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          <main className="container mx-auto px-4 py-8 relative">
            <section className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-24 mb-8 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
                Welcome to the AI Insights Hub
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your one-stop destination for all the resources you need to
                excel in your LLM journey.
              </p>
            </section>

            <div className="relative z-10">
              <Skeleton />
              <SearchBar />
            </div>

            <div className="mt-12">
              <Skeleton />

              <CategoryFilter />
            </div>

            <div className="mt-12">
              <ResourceGrid />
            </div>

            <div className="mt-16">
              <ContactSection />
              <Skeleton />
            </div>
          </main>
        </div>
      </SearchProvider>
    </CategoryProvider>
  );
}
