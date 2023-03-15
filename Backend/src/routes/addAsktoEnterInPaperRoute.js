const insertAsktoEnterInPaper = require("../db/insertAsktoEnterInPaper");
const getPaperDone = require("../db/getPaperDone");

module.exports = addAsktoEnterInPaperRoute = {
  method: "post",
  path: "/paperenter/:id",
  handler: async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const check = await getPaperDone(user.user_id, id);
    if(check.length == 0){
      const date = new Date();
      const time =date.getDate() +"/" +date.getMonth() +"/" +date.getFullYear() +"  :" +date.getHours() +":" +date.getMinutes() +":" +date.getSeconds();
      const response = await insertAsktoEnterInPaper(user.user_id, id, time);
      res.status(200).json(time);
    }else{
      const time = check[0].time;
      res.status(200).json(time);
    }
  },
};
