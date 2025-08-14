require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const itemsRoute = require("./routes/items");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/items", itemsRoute);

// Server Port from .env or fallback
const PORT = process.env.BACKEND_PORT || process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
