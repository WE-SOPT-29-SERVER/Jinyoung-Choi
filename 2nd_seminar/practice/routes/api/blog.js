var express = require('express');
var router = express.Router();

/* GET post page. */
router.get('/post', function(req, res, next) {
  const result={
      status:200,
      message:"블로그post페이지에 오신 걸 환영합니다!",
  };
  res.status(200).send(result);
});

module.exports=router;