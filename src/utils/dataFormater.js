function formatEventData(event) {
  const { name: homeName } = event.home.participant[0];
  const { name: awayName } = event.away.participant[0];
  const { name: stage } = event.stage;
  const startTime = new Date(event.stage.startTime * 1000);

  return { participants: { home: homeName, away: awayName }, stage, startTime };
}

module.exports = formatEventData;
