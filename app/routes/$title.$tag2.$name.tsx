import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import ResourceCard from "~/components/resource/ResourceCard";
import NotFound from "~/components/resource/NotFound";
import { routeUtils } from "~/utils/routes";

export const meta: MetaFunction = ({ params, location }) => {
  const { title, tag2, name } = params;
  const { decodedTitle, decodedTag2, decodedName } = routeUtils.decodePath(
    title,
    tag2,
    name
  );
  const { resource } = routeUtils.findBlockAndResource(
    decodedTitle,
    decodedTag2,
    decodedName
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
  const { decodedTitle, decodedTag2, decodedName } = routeUtils.decodePath(
    title,
    tag2,
    name
  );
  const { block, resource } = routeUtils.findBlockAndResource(
    decodedTitle,
    decodedTag2,
    decodedName
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
