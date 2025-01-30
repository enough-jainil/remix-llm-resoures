import { Resource } from "~/types/resource";
import { ArrowRight } from "lucide-react";
import { Link } from "@remix-run/react";
import { routes } from "~/utils/routes";

interface ActionButtonsProps {
  resource: Resource;
}

export function ActionButtons({ resource }: ActionButtonsProps) {
  return (
    <div className="flex gap-2">
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-doreturn-gold to-doreturn-grey text-white text-sm font-medium py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300"
      >
        Visit Resource
        <ArrowRight className="w-4 h-4" />
      </a>
      <Link
        to={routes.resourceDetail(resource.tag, resource.tag2, resource.name)}
        className="inline-flex items-center gap-2 bg-zinc-800 text-white text-sm font-medium py-2 px-4 rounded-xl hover:bg-zinc-700 transition-all duration-300"
      >
        View Details
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
