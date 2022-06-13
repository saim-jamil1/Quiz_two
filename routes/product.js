var express = require('express');
var router = express.Router();
var Products= require('../models/product');

/* GET home page. */


// display all products
router.get('/', async function(req, res, next) {
    let products = Products.find()
    .then(products => {
        console.log("products fetched succhesful");
        res.render('PRODUCTS/list', {
        title: "Products in DB", 
        products: products
        

    });
    })
    .catch(err => {
        console.log("unable to fetch products" + err);
    })

    
    router.get('/add', function(req, res, next) {
        res.render('products/add');
      });

      // Write values according to db
      router.post('/add', async function(req, res, next) {
        
        let product = Products(req.body);
        await product.save();
        res.redirect('/products');
      });

      // delete values according to db
      router.get('/delete/:id', async function(req, res, next) {
        let product = await Products.findByIdAndDelete(req.params.id);
        res.redirect('/products');
      });

         // Edit values according to db
         router.get('/edit/:id', async function(req, res, next) {
            let product = await Products.findByIdAndDelete(req.params.id);
            product = Products(req.body);
            await product.save();
            res.render('products/edit',{product});
          });


         router.post('/edit/:id', async function(req, res, next) {
            let product = await Products.findById(req.params.id);
            console.log(product);
            product.title = req.body.title;
            product.name = req.body.name;
            product.price = req.body.price;
            product.description = req.body.description;
            await product.save();
            res.redirect('/products');
          });

          // add to cart functionality values according to db
        router.get('/cart/:id', async function(req, res, next) {
        let product = await Products.findById(req.params.id);
        let cart = [];
        if(req.cookies.cart){
          cart = req.cookies.cart
        }
        cart.push(product);
        res.cookie('cart', cart);
        console.log("product fetched succhesful");
        res.redirect('/products');
      });
      
  
});



module.exports = router;
