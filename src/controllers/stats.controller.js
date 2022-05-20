/** load required packages */
const {
  InternalServerException,
} = require("http-exception-transformer/exceptions");

/** load peer modules and services */
const { logger } = require("../services/logger");
const { StatsService } = require("../services/stats.service");

/**
 * StatsController contains definitions of all route handlers in /stats namespace.
 */

class StatsController {
  /**
   * each member function of controller is attached to each route
   */
  static async getStats() {
    try {
      const { twitterStats, githubStats } = await StatsService.getStats();
      return { twitterStats, githubStats };
    } catch (err) {
      logger.error(err);
      throw new InternalServerException();
    }
  }
}

module.exports = { StatsController };
