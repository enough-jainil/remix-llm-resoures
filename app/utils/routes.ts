export const routes = {
  resourceDetail: (tag: string, tag2: string | undefined, name: string) => {
    return `/resource/${encodeURIComponent(tag2 || tag)}/${encodeURIComponent(
      name
    )}`;
  },
};
