import { useState } from "react";

// Interface defining the props for the ProjectSubmissionForm component
interface ProjectFormProps {
  isOpen: boolean; // Indicates if the form is open or closed
  onClose: () => void; // Function to close the form
}

// ProjectSubmissionForm component for submitting open source project details
export default function ProjectSubmissionForm({
  isOpen,
  onClose,
}: ProjectFormProps) {
  // State to hold form data
  const [formData, setFormData] = useState({
    projectName: "", // Name of the project
    description: "", // Description of the project
    githubUrl: "", // GitHub URL for the project
    websiteUrl: "", // Website URL for the project
    documentation: "", // Documentation URL for the project
    category: "", // Category of the project
    tags: "", // Tags associated with the project
    authorName: "", // Name of the author
    authorEmail: "", // Email of the author
    difficultyLevel: "intermediate", // Difficulty level of the project
    license: "", // License type for the project
  });

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic here
    console.log(formData); // Log the form data to the console
    onClose(); // Close the form after submission
  };

  // If the form is not open, return null to prevent rendering
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">
            List Your Open Source Project
          </h2>
          <button
            onClick={onClose} // Close the form when the button is clicked
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields remain the same */}
          {/* Project Name */}
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Project Name *
            </label>
            <input
              type="text"
              id="projectName"
              required // Mark this field as required
              className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.projectName} // Bind input value to state
              onChange={(e) =>
                setFormData({ ...formData, projectName: e.target.value })
              } // Update state on input change
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button" // Button to cancel the submission
              onClick={onClose} // Close the form when clicked
              className="px-6 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit" // Button to submit the form
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-colors"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
