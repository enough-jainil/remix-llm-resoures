export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "MemoryView AI Resources Hub",
          description:
            "MemoryView AI Resources Hub: Your go-to platform for cutting-edge Large Language Model (LLM) resources, in-depth tutorials, and powerful AI tools to accelerate your learning and projects.",
          url: "https://memoryview.in",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://memoryview.in/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
          sameAs: [
            "https://twitter.com/doreturn_in",
            "https://github.com/enough-jainil",
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
          author: {
            "@type": "Person",
            name: "Jainil Prajapati",
          },
          copyrightYear: new Date().getFullYear(),
          inLanguage: "en",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://memoryview.in",
          },
        }),
      }}
    />
  );
}
