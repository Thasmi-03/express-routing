import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("HEY UKI");
});

app.listen(PORT, () => {
  console.log(`servers is running on http://localhost:${PORT}`);
});
