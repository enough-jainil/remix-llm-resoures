export async function loader() {
  const { resourceBlocks } = await import("~/data/resources");

  return json(
    { resourceBlocks },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
        Vary: "Accept-Encoding",
      },
    }
  );
}
