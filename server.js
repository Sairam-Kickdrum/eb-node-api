const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
