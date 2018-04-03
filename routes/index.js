var express = require('express');
var router = express.Router();
import task from "../models/schedule";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post("/set", (req,res,next)=>{
  let date = new Date(req.body.date);
  task.setTask(date, req.body.des,req.body.title,req.body.freqtime);
  res.json(200, {success: true});
})
module.exports = router;

