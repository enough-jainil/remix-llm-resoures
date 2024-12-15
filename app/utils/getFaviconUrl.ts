export function getFaviconUrl(url: string): string {
  try {
    const domain = new URL(url).hostname;
    return (
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128` ||
      "/favicon.ico"
    );
  } catch {
    return "/favicon.ico";
  }
}
