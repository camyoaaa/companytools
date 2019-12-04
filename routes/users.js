var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', function (req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});
router.post('/regist', function (req, res, next) {
  console.log(req);
  res.send(req);
});

module.exports = router;