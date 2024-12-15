// Import necessary hooks and types
import { useBookmarks } from "~/context/BookmarkContext";
import { Resource } from "~/types/resource";

// Define the props for the BookmarkButton component
interface BookmarkButtonProps {
  resource: Resource; // The resource to be bookmarked
}

// BookmarkButton component for adding/removing bookmarks for a resource
export default function BookmarkButton({ resource }: BookmarkButtonProps) {
  // Destructure bookmark-related functions from the context
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  // Check if the current resource is bookmarked
  const bookmarked = isBookmarked(resource.id);

  // Handle click event for the bookmark button
  const handleClick = () => {
    // If the resource is already bookmarked, remove it; otherwise, add it
    if (bookmarked) {
      removeBookmark(resource.id);
    } else {
      addBookmark(resource);
    }
  };

  return (
    <button
      onClick={handleClick} // Attach click handler
      className={`p-2 rounded-full transition-all duration-300 ${
        bookmarked
          ? "text-doreturn-gold bg-doreturn-gold/10" // Styles for bookmarked state
          : "text-zinc-400 hover:text-doreturn-gold" // Styles for unbookmarked state
      }`}
      title={bookmarked ? "Remove bookmark" : "Add bookmark"} // Tooltip for button
    >
      <svg
        className="w-5 h-5" // SVG icon for the bookmark button
        fill={bookmarked ? "currentColor" : "none"} // Fill color based on bookmark state
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" // Bookmark icon path
        />
      </svg>
    </button>
  );
}
