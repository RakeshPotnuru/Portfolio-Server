const axios = require("axios");
const {
  InternalServerException,
} = require("http-exception-transformer/exceptions");

require("dotenv").config();

const getTwitterStats = async () => {
  try {
    const response = await axios.get(
      "https://api.twitter.com/2/users/1294988617601884161?user.fields=public_metrics",
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch {
    throw new InternalServerException();
  }
};

const getGithubStats = async () => {
  var data = JSON.stringify({
    query: `query($userName:String!) { 
    user(login: $userName){
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      followers {
          totalCount
      }
      repositories {
          totalCount
      }
    }
  }`,
    variables: { userName: "RakeshPotnuru" },
  });

  try {
    const response = await axios.post("https://api.github.com/graphql", data, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch {
    throw new InternalServerException();
  }
};

module.exports = { getTwitterStats, getGithubStats };
