import { useState } from 'react';

interface ProjectFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectSubmissionForm({ isOpen, onClose }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    githubUrl: '',
    websiteUrl: '',
    documentation: '',
    category: '',
    tags: '',
    authorName: '',
    authorEmail: '',
    difficultyLevel: 'intermediate',
    license: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">List Your Open Source Project</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields remain the same */}
          {/* Project Name */}
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-200 mb-2">
              Project Name *
            </label>
            <input
              type="text"
              id="projectName"
              required
              className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
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