const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));

// API endpoint
app.get("/api/status", (req, res) => {
  res.json({
    status: "running",
    time: new Date(),
    app: "Azure Demo Web App"
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});