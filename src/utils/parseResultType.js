const fs = require("fs").promises;

async function parseResultType(scoreAll) {
  try {
    const data = await fs.readFile("data/codebookResultTypes.json", "utf8");
    const codebookResultTypes = JSON.parse(data).data.codebookResultTypes;

    if (!scoreAll) {
      return null;
    }

    const resultTypeMapping = Object.fromEntries(
      codebookResultTypes.map(({ id, name }) => [id, name])
    );

    const resultsWithNames = scoreAll.map(({ resultTypeId, value }) => ({
      resultTypeName: resultTypeMapping[resultTypeId] || "Unknown",
      value,
    }));

    return resultsWithNames;
  } catch (error) {
    console.error("Error in parseResultType:", error);
    throw error;
  }
}

module.exports = parseResultType;
