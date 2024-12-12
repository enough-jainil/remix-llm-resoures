import { useBookmarks } from "~/context/BookmarkContext";
import { Resource } from "~/types/resource";

interface BookmarkButtonProps {
  resource: Resource;
}

export default function BookmarkButton({ resource }: BookmarkButtonProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const bookmarked = isBookmarked(resource.id);

  const handleClick = () => {
    if (bookmarked) {
      removeBookmark(resource.id);
    } else {
      addBookmark(resource);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-all duration-300 ${
        bookmarked
          ? "text-doreturn-gold bg-doreturn-gold/10"
          : "text-zinc-400 hover:text-doreturn-gold"
      }`}
      title={bookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      <svg
        className="w-5 h-5"
        fill={bookmarked ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  );
}