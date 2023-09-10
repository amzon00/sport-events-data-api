const express = require("express");
const app = express();
const port = 3000;
const eventsRouter = require("./src/routes/events.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/events", eventsRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
