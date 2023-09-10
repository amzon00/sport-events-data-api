const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events.js");

router.get("/", eventsController.getAllEvents);
router.get("/:id", eventsController.getEventById);
router.get("/stage/:stage", eventsController.getEventsByStage);

module.exports = router;
