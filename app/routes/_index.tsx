import { useState } from "react";
import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { SearchProvider } from "~/context/SearchContext";
import { CategoryProvider } from "~/context/CategoryContext";
import SearchBar from "~/components/SearchBar";
import ResourceGrid from "~/components/ResourceGrid";
import ContactSection from "~/components/ContactSection";

export const meta: MetaFunction = () => {
  return [
    { title: "LLM Resources Hub - Your Go-To for AI Learning" },
    {
      name: "description",
      content:
        "Explore a comprehensive collection of Large Language Model (LLM) resources, tools, and learning materials to excel in your AI journey.",
    },
    {
      name: "keywords",
      content:
        "LLM, AI resources, machine learning, tutorials, ChatGPT, AI courses",
    },
    {
      property: "og:title",
      content: "LLM Resources Hub - Your Go-To for AI Learning",
    },
    {
      property: "og:description",
      content:
        "Explore a comprehensive collection of Large Language Model (LLM) resources, tools, and learning materials to excel in your AI journey.",
    },
    {
      property: "og:url",
      content: "https://resources.doreturn.in",
    },
    {
      property: "og:image",
      content:
        "https://resources.doreturn.in/public/doreturn Fetured Image (1).png", // Update with the actual path to your featured image
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
                Welcome to the AI Insights Hub
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
