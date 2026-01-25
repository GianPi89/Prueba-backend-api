const express = require("express");
const cors = require("cors");
const pool = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1");
    res.json({ message: "API y MySQL conectados correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error conectando a MySQL" });
  }
});

module.exports = app;
