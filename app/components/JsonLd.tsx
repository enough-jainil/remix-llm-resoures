export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "LLM Resources Hub",
          description:
            "Comprehensive collection of Large Language Model (LLM) resources, tutorials, and tools",
          url: "https://resources.doreturn.in",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://resources.doreturn.in/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
          sameAs: [
            "https://twitter.com/languagemodels",
            "https://github.com/languagemodels",
          ],
          keywords: [
            "LLM",
            "Large Language Models",
            "AI resources",
            "Machine Learning tutorials",
            "ChatGPT tutorials",
            "AI courses",
            "LLM Resources Hub",
            "LLM Tools",
            "LLM Tutorials",
            "LLM Development",
            "LLM Applications",
          ],
        }),
      }}
    />
  );
}
