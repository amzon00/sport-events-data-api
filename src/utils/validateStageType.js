const fs = require("fs").promises;

async function validateStageType(stageType) {
  try {
    const data = await fs.readFile("data/codeBookEventStages.json", "utf8");
    const dataParsed = JSON.parse(data);

    const stages = dataParsed.data.codebookEventStages.map(
      (element) => element.name
    );

    const isValid = stages.includes(stageType);

    return isValid;
  } catch (error) {
    console.error("Error reading and parsing data:", error);
    return false;
  }
}

module.exports = validateStageType;
