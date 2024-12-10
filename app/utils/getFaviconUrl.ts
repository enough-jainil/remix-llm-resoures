export const getFaviconUrl = (link: string) => {
  try {
    const domain = new URL(link).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch {
    return "/public/favicon.ico"; // Ensure this path is correct and the file exists
  }
};

