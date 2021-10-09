var express = require('express');
var router = express.Router();

/* GET post page. */
router.get('/login', function(req, res, next) {
  const result={
      status:200,
      message:"login페이지에 오신 걸 환영합니다!",
  };
  res.status(200).send(result);
});
router.get('/signup', function(req, res, next) {
    const result={
        status:200,
        message:"signup페이지에 오신 걸 환영합니다!",
    };
    res.status(200).send(result);
  });
  
module.exports=router;