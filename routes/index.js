var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// cart page code here
router.get('/cart', function(req, res, next) {
  cart = req.cookies.cart;
  if(!cart) {
    cart=[];
  }

  res.render('cart', { title: 'My cart page' ,cart: cart });
});




module.exports = router;
