import { Link } from "@remix-run/react";
import { routes } from "~/utils/routes";
import { Resource } from "~/types/resource";
import { X, ArrowRight } from "lucide-react"; // Importing icons from lucide-react
import { ModalHeader } from "./ViewAll/ModalHeader";
import { ResourceCard } from "./ViewAll/ResourceCard";

// Define the props for the ViewAll component
interface ViewAllProps {
  isOpen: boolean; // Indicates if the modal is open
  onClose: () => void; // Function to close the modal
  title: string; // Title of the modal
  resources: Resource[]; // Array of resources to display
}

// Main ViewAll component for displaying a modal with a list of resources
export default function ViewAll({
  isOpen,
  onClose,
  title,
  resources,
}: ViewAllProps) {
  // If the modal is not open, return null to prevent rendering
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose} // Close modal when clicking outside
      aria-modal="true"
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div
        className="bg-[#1A1A1A] rounded-2xl p-8 w-full max-w-6xl max-h-[85vh] overflow-hidden flex flex-col border border-doreturn-gold/30"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <ModalHeader
          title={title}
          description="Browse through our curated collection of resources"
          onClose={onClose}
        />
        <div className="overflow-y-auto pr-4 custom-scrollbar flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
