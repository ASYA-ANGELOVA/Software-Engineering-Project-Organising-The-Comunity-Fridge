const express = require("express");
const router = express.Router();
const db = require("../db"); // Assume we have a database connection

router.get("/", async (req, res) => {
  const donations = await db.query("SELECT name, quantity FROM donations");
  res.render("pages/home", { donations: donations.rows });
});

module.exports = router;
