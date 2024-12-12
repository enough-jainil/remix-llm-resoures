import { createContext, useContext, useState, useEffect } from "react";
import { Resource } from "~/types/resource";

interface BookmarkContextType {
  bookmarks: Resource[];
  addBookmark: (resource: Resource) => void;
  removeBookmark: (resourceId: number) => void;
  isBookmarked: (resourceId: number) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

const STORAGE_KEY = "ai-insights-bookmarks";

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Resource[]>(() => {
    // Initialize from localStorage during first render
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Error parsing bookmarks:", e);
          return [];
        }
      }
    }
    return [];
  });

  // Save to localStorage whenever bookmarks change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const addBookmark = (resource: Resource) => {
    setBookmarks((prev) => {
      // Prevent duplicate bookmarks
      if (!prev.some((bookmark) => bookmark.id === resource.id)) {
        return [...prev, resource];
      }
      return prev;
    });
  };

  const removeBookmark = (resourceId: number) => {
    setBookmarks((prev) =>
      prev.filter((bookmark) => bookmark.id !== resourceId)
    );
  };

  const isBookmarked = (resourceId: number) => {
    return bookmarks.some((bookmark) => bookmark.id === resourceId);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
}
