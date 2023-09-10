const fs = require("fs").promises;

async function validateStageType(stageType) {
  try {
    const data = await fs.readFile("data/codeBookEventStages.json", "utf8");
    const { codebookEventStages } = JSON.parse(data).data;

    return codebookEventStages.some((element) => element.name === stageType);
  } catch (error) {
    console.error("Error reading or parsing data:", error);
    return false;
  }
}

module.exports = validateStageType;
