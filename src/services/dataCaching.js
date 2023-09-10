const fs = require("fs").promises;
const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 10, checkperiod: 120 });

async function fetchAndCacheEvents() {
  try {
    const data = await fs.readFile("data/listEvents.json", "utf8");
    const events = JSON.parse(data);

    myCache.set("events", events);

    console.log("Events fetched and cached.");
  } catch (error) {
    console.error("Error fetching and caching events:", error);
  }
}

module.exports = { fetchAndCacheEvents, myCache };
