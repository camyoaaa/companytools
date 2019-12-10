var express = require('express');
var router = express.Router();

const DB = require('../models');
const UserModel = DB.getModel('User');
const {
  sendValidCode
} = require('../tool/sendSMS');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', async function (req, res, next) {


  const {
    phone,
    password,
    validCode
  } = req.body;
  try {
    let users = await UserModel.findOne({
      phone,
      password
    });
    if (validCode != users) {
      res.json({
        status: 400,
        msg: '验证码错误'
      });
    }
    if (users) {
      res.cookie('userid', users._id); //登录时候设置cookie
    }
    res.json({
      status: users ? 200 : 400,
      msg: users ? '用户名或者密码错误' : '登陆成功'
    });
  } catch (error) {}

});
router.post('/regist', function (req, res, next) {
  const {
    phone,
    password,
    validcode
  } = req.body;
  UserModel.find({
    phone
  }, (err, doc) => {
    if (!err) {
      if (doc.length > 0) {
        res.json({
          status: 400,
          msg: '该手机号码已被注册'
        });
      } else {
        UserModel.create({
          phone,
          password,
          validcode
        }, (err, doc) => {
          if (!err) {
            res.json({
              status: 200,
              msg: '注册成功'
            });
          } else {
            res.send(err);
          }
        });
      }
    }
  });

});
router.post('/isRegist', async function (req, res, next) {
  try {
    const {
      phone
    } = req.body;
    let queryResult = await UserModel.find({
      phone
    });
    res.json({
      status: 200,
      isRegist: queryResult.length > 0
    });
  } catch (error) {}

});
router.post('/validcode', async function (req, res, next) {
  const {
    phone
  } = req.body;
  try {
    const {
      sixValidCode,
      result
    } = await sendValidCode(phone);
    UserModel.update({
      phone
    }, {
      $set: {
        validcode: sixValidCode
      }
    });
    res.json({
      status: 200,
      sixValidCode,
      result
    });
  } catch (error) {
    res.json({
      status: 400,
      msg: error.message
    });
  }
});

module.exports = router;