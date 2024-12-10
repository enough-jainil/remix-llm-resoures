export async function loader() {
  const { resourceBlocks } = await import("~/data/resources");
  return json({ resourceBlocks });
}
