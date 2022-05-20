const { getTwitterStats, getGithubStats } = require("../util/getStatsData");

class StatsService {
  /*
   * @returns Object of stats
   */
  static async getStats() {
    const twitterStats = await getTwitterStats();
    const githubStats = await getGithubStats();
    return { twitterStats, githubStats };
  }
}

module.exports = { StatsService };
