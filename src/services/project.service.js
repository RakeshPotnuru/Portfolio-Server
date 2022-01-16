const projects = require("../data/projects");

class ProjectService {
  /**
   * @returns Array of projects
   */
  static getAllProjects() {
    return projects;
  }
}

module.exports = { ProjectService };
