var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/blog',require('./api/blog')); //폴더 안의 blog파일
router.use('/api/users',require('./api/users')); //폴더 안의 index

module.exports = router;
