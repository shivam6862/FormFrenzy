const getAllResultsForPaper = require("../db/getAllResultsForPaper");
const getAllResultForPaperFunction = require("./getAllResultsForPaperFunction");

module.exports = getAllResultsForPaperRoute = {
  method: "get",
  path: "/resultpaper/:id",
  handler: async (req, res) => {
    const { id } = req.params;
    const results = await getAllResultsForPaper(id);
    const finalResult = await getAllResultForPaperFunction(results);
    res.status(200).json(finalResult);
  },
};
