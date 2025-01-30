import { X } from "lucide-react";

interface ModalHeaderProps {
  title: string;
  description?: string;
  onClose: () => void;
}

export function ModalHeader({ title, description, onClose }: ModalHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-3xl font-semibold text-white mb-2">{title}</h2>
        {description && <p className="text-zinc-400 text-sm">{description}</p>}
      </div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white transition-colors p-2"
        aria-label="Close modal"
      >
        <X className="w-6 h-6 hover:rotate-90 duration-300" />
      </button>
    </div>
  );
}
