import { Link } from "@remix-run/react";
import { FaRegSadCry } from "react-icons/fa"; // Importing the FaRegSadCry icon

interface NotFoundProps {
  tag2?: string;
  name?: string;
}

export default function NotFound({ tag2, name }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
      <div className="text-center">
        {/* <div className="flex justify-center">
          <FaRegSadCry className="w-12 h-12 text-doreturn-gold mb-4" />
        </div> */}
        {/* Displaying the sad cry icon */}
        <h2 className="text-2xl text-white mb-4">Resource not found 😔</h2>
        <p className="text-zinc-400 mb-4">
          Params: {tag2}/{name}
        </p>
        <Link
          to="/"
          className="text-doreturn-gold hover:text-doreturn-gold/80 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
