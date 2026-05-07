const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

let visits = 0;

// STATUS API
app.get("/api/status", (req, res) => {
    res.json({
        status: "running",
        time: new Date(),
        app: "Azure Demo Web App"
    });
});

// GET VISITS
app.get("/api/visits", (req, res) => {
    res.json({
        visits
    });
});

// ADD VISIT
app.post("/api/visits", (req, res) => {

    visits++;

    res.json({
        success: true,
        visits
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});