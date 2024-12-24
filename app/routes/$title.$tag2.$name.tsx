import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { resourceBlocks } from "~/data/resources";
import ResourceCard from "~/components/resource/ResourceCard";
import NotFound from "~/components/resource/NotFound";

export const meta: MetaFunction = ({ params, location }) => {
  const { title, tag2, name } = params;
  const decodedTitle = decodeURIComponent(title || "").toLowerCase();
  const decodedTag2 = decodeURIComponent(tag2 || "").toLowerCase();
  const decodedName = decodeURIComponent(name || "").toLowerCase();

  const block = resourceBlocks.find((block) => {
    const slugifiedTitle = block.title.toLowerCase().replace(/\s+/g, "-");
    const slugifiedTag2 = (block.tag2 || block.tag)
      .toLowerCase()
      .replace(/\s+/g, "-");
    return slugifiedTitle === decodedTitle && slugifiedTag2 === decodedTag2;
  });

  const resource = block?.resources.find(
    (r) => r.name.toLowerCase().replace(/\s+/g, "-") === decodedName
  );

  if (!resource) {
    return [{ title: "Resource Not Found | AI Insights Hub" }];
  }

  return [
    { title: `${resource.name} | AI Insights Hub` },
    {
      name: "description",
      content: resource.description2 || resource.description || "",
    },
    { property: "og:type", content: "article" },
    { property: "og:title", content: `${resource.name} | AI Insights Hub` },
    {
      property: "og:description",
      content: resource.description2 || resource.description || "",
    },
    {
      property: "og:url",
      content: `https://memoryview.in${location.pathname}`,
    },
    { property: "og:image", content: resource.favicon },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:title",
      content: `${resource.name} | AI Insights Hub`,
    },
    {
      property: "twitter:description",
      content: resource.description2 || resource.description || "",
    },
    { property: "twitter:image", content: resource.favicon },
  ];
};

export default function ResourceDetail() {
  const { title, tag2, name } = useParams();

  const decodedTitle = decodeURIComponent(title || "").toLowerCase();
  const decodedTag2 = decodeURIComponent(tag2 || "").toLowerCase();
  const decodedName = decodeURIComponent(name || "").toLowerCase();

  const block = resourceBlocks.find((block) => {
    const slugifiedTitle = block.title.toLowerCase().replace(/\s+/g, "-");
    const slugifiedTag2 = (block.tag2 || block.tag)
      .toLowerCase()
      .replace(/\s+/g, "-");
    return slugifiedTitle === decodedTitle && slugifiedTag2 === decodedTag2;
  });

  const resource = block?.resources.find(
    (r) => r.name.toLowerCase().replace(/\s+/g, "-") === decodedName
  );

  if (!resource || !block) {
    return <NotFound tag2={tag2} name={name} />;
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <ResourceCard resource={resource} />
    </div>
  );
}
