const faviconCache = new Map();

export const getFaviconUrl = (link: string) => {
  try {
    if (faviconCache.has(link)) {
      return faviconCache.get(link);
    }
    const domain = new URL(link).hostname;
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    faviconCache.set(link, faviconUrl);
    return faviconUrl;
  } catch {
    return "/favicon.ico";
  }
};
