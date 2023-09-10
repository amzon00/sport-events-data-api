const fs = require("fs").promises;
const formatEventData = require("../utils/dataFormater.js");
const { myCache, fetchAndCacheEvents } = require("../services/dataCaching.js");
const validateStageType = require("../utils/validateStageType.js");

const getAllEvents = async (req, res) => {
  try {
    let events;
    const cachedEvents = myCache.get("events");

    if (cachedEvents) {
      console.log("Events retrieved from cache.");
      events = cachedEvents.data.listEvents;
    } else {
      console.log("Events fetched from the database.");
      await fetchAndCacheEvents();

      const data = await fs.readFile("data/listEvents.json", "utf8");
      const dataParsed = JSON.parse(data);
      events = dataParsed.data.listEvents;
    }

    const formattedEventsPromises = events.map(async (event) => {
      return await formatEventData(event);
    });

    const formattedEvents = await Promise.all(formattedEventsPromises);

    res.json(formattedEvents);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEventById = async (req, res) => {
  const eventId = req.params.id;

  try {
    let event;
    const cachedEvents = myCache.get("events");

    if (cachedEvents) {
      console.log("Events retrieved from cache.");
      event = cachedEvents.data.listEvents.find(
        (event) => event.id === Number(eventId)
      );
    } else {
      console.log("Events fetched from the database.");
      await fetchAndCacheEvents();

      const data = await fs.readFile("data/listEvents.json", "utf8");
      const dataParsed = JSON.parse(data);
      event = dataParsed.data.listEvents.find(
        (event) => event.id === Number(eventId)
      );
    }

    if (event) {
      const formattedEvent = await formatEventData(event);
      res.json(formattedEvent);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEventsByStage = async (req, res) => {
  const stageType = req.params.stage;

  try {
    const isStageValid = await validateStageType(stageType);

    if (!isStageValid) {
      res.status(404).json({ error: "Stage not found" });
      return;
    }

    const cachedEvents = myCache.get("events");

    let eventsFromDb = null;

    if (!cachedEvents) {
      console.log("Events not found in cache. Fetching from the database.");
      await fetchAndCacheEvents();

      const data = await fs.readFile("data/listEvents.json", "utf8");
      const dataParsed = JSON.parse(data);
      eventsFromDb = dataParsed;
    } else {
      console.log("Events retrieved from cache.");
    }

    const events = (
      cachedEvents?.data?.listEvents ||
      eventsFromDb?.data?.listEvents ||
      []
    ).filter((event) => event.stage.name === stageType);

    if (events.length !== 0) {
      const formattedEventsPromises = events.map(async (event) => {
        return await formatEventData(event);
      });

      const formattedEvents = await Promise.all(formattedEventsPromises);
      res.json(formattedEvents);
    } else {
      res.status(404).json({ error: "Events not found" });
    }
  } catch (error) {
    console.error("Error in getEventsByStage:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllEvents, getEventById, getEventsByStage };
