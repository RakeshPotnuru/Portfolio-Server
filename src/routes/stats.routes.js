const express = require("express");

const router = express.Router();

/**
 * load the service
 */
const { StatsController } = require("../controllers/stats.controller");

router.get("/", async (req, res) => {
  const { twitterStats, githubStats } = await StatsController.getStats();
  return res.json({ twitterStats, githubStats });
});

module.exports = router;
