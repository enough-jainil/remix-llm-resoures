import express from "express";
import path from "path";

const app = express();

// Serve static files with cache control
app.use(
  "/public",
  express.static(path.join(__dirname, "public"), {
    setHeaders: (res) => {
      res.set("Cache-Control", "public, max-age=604800"); // 1 week
    },
  })
);

app.get("/manifest.json", (req, res) => {
  res.set("Cache-Control", "public, max-age=604800"); // 1 week
  res.sendFile(path.join(__dirname, "public", "manifest.json"));
});

// Other routes and middleware
