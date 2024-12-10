import { motion } from "framer-motion";

interface Resource {
  id: number;
  name: string;
  link: string;
  favicon: string;
  description?: string;
}

interface ViewAllProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  resources: Resource[];
}

export default function ViewAll({
  isOpen,
  onClose,
  title,
  resources,
}: ViewAllProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#1A1A1A] rounded-2xl p-8 w-full max-w-6xl max-h-[85vh] overflow-hidden flex flex-col border border-doreturn-gold/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-2">{title}</h2>
            <p className="text-zinc-400 text-sm">
              Browse through our curated collection of resources
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </div>

        <div className="overflow-y-auto pr-4 custom-scrollbar flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((resource) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-zinc-800 p-2 rounded-xl">
                    <img
                      src={resource.favicon}
                      alt=""
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <h3 className="text-lg text-white font-medium">
                    {resource.name}
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {resource.description ||
                    "Explore this valuable resource for LLM development and research."}
                </p>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-white text-sm font-medium py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Visit Resource
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
