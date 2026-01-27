const express = require("express");
const cors = require("cors");
const pool = require("./config/database");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Fintech funcionando" });
});

module.exports = app;
