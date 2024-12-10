export const getFaviconUrl = (link: string) => {
  const domain = new URL(link).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
};