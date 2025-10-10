const snapsave = require("metadownloader");

async function fetchMetaData(url) {
  try {
    const result = await snapsave(url); // or snapsave.facebook(url) for FB links
    return result;
  } catch (error) {
    throw new Error("Error fetching media: " + error.message);
  }
}

module.exports = { fetchMetaData };
