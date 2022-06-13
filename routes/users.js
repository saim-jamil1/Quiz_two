var express = require('express');
var router = express.Router();
var userModel = require('../models/users');

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('users/register');
});

/* reister users listing. */
router.post('/register', async function(req, res, next) {
  let user = new userModel(req.body);
  await user.save();
  res.redirect('/');
});


/* Login user */
router.get('/login', function(req, res, next) {
  res.render('users/login');
});

router.post('/login', async function(req, res, next) {
  let user = await userModel.findOne({email: req.body.email,password: req.body.password});
  if(!user) {
    console.log("user not found");
    return res.redirect("/login") ;
    
  } else{
  res.redirect('/');
}

  return res.render('users/login');
});


module.exports = router;
