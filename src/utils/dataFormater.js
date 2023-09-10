const parseResultType = require("./parseResultType");

async function formatEventData(event) {
  const {
    home: {
      participant: [{ name: homeName }],
    },
    away: {
      participant: [{ name: awayName }],
    },
    stage: { name: stage },
    stage: { startTime },
    home: { scoreAll },
  } = event;

  const formattedStartTime = new Date(startTime * 1000);
  const formattedScoreAll = await parseResultType(scoreAll);

  const result = {
    participants: { home: homeName, away: awayName },
    stage,
    startTime: formattedStartTime,
    scoreAll: formattedScoreAll,
  };

  if (!result.scoreAll) {
    delete result.scoreAll;
  }

  return result;
}

module.exports = formatEventData;
