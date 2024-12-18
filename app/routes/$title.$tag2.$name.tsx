import { useParams } from "@remix-run/react";
import { resourceBlocks } from "~/data/resources";
import ResourceCard from "~/components/resource/ResourceCard";
import NotFound from "~/components/resource/NotFound";

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
