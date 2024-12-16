import type { MetaFunction } from "@remix-run/node";
import { SearchProvider } from "~/context/SearchContext";
import { CategoryProvider } from "~/context/CategoryContext";
import SearchBar from "~/components/SearchBar";
import CategoryFilter from "~/components/CategoryFilter";
import ResourceGrid from "~/components/ResourceGrid";
import ContactSection from "~/components/ContactSection";

export const meta: MetaFunction = () => {
  return [
    {
      title: "MemoryView AI Resources Hub - Your Ultimate LLM Resource Center",
    },
    {
      name: "description",
      content:
        "Discover the MemoryView AI Resources Hub, your premier destination for comprehensive Large Language Model (LLM) resources, expert tutorials, and innovative AI tools designed to enhance your learning and projects.",
    },
    {
      name: "keywords",
      content:
        "LLM, Large Language Models, AI resources, Machine Learning tutorials, ChatGPT tutorials, AI courses, LLM Resources Hub, LLM Tools, LLM Tutorials, LLM Development, LLM Applications, AI learning, AI tools, educational resources",
    },
    {
      property: "og:title",
      content: "MemoryView AI Resources Hub - Explore LLM Resources",
    },
    {
      property: "og:description",
      content:
        "Join the MemoryView AI Resources Hub for unparalleled access to cutting-edge LLM resources, in-depth tutorials, and powerful AI tools to accelerate your learning journey.",
    },
    {
      property: "og:url",
      content: "https://memoryview.in",
    },
    {
      property: "og:image",
      content: "/featuredimage.png",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "MemoryView AI Resources Hub",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
  ];
};

export default function Index() {
  return (
    <CategoryProvider>
      <SearchProvider>
        <div className="min-h-screen bg-[#1A1A1A] relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-doreturn-gold/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-doreturn-gold/10 via-transparent to-transparent opacity-50 pointer-events-none" />

          <main className="container mx-auto px-4 py-8 relative">
            <section className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-24 mb-8 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
                Welcome to the MemoryView AI Resources Hub
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your one-stop destination for all the resources you need to
                excel in your LLM journey.
              </p>
            </section>

            <div className="relative z-10">
              <SearchBar />
            </div>

            <div className="mt-12">
              <CategoryFilter />
            </div>

            <div className="mt-12">
              <ResourceGrid />
            </div>

            <div className="mt-16">
              <ContactSection />
            </div>
          </main>
        </div>
      </SearchProvider>
    </CategoryProvider>
  );
}
