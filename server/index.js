import express from 'express';
import * as db from './db/db';

// Set up the express app
const app = express();
// get all todos

app.get('/api/allCategories', (req, res) => {
  res.status(200).send({
    status: 'ok',
    message: 'all categories retrieved successfully',
    data: db.allCategories
  })
});

app.get('/api/categoryInfo', (req, res) => {
    res.status(200).send({
      status: 'ok',
      message: 'category info retrieved successfully',
      data: db.categoryInfo
    })
  });
app.get('/api/allProducts', (req, res) => {
    res.status(200).send({
      status: 'ok',
      message: 'all products retrieved successfully',
      data: db.allProducts
    })
  });
app.get('/api/productInfo', (req, res) => {
    res.status(200).send({
      status: 'ok',
      message: 'product information retrieved successfully',
      data: db.productInfo
    })
  });
app.get('/api/cartProduct', (req, res) => {
    res.status(200).send({
      status: 'ok',
      message: 'cart product retrieved successfully',
      data: db.cartProduct
    })
  });

  // ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/autenticacion.html');
});
app.get('/home-page', (req, res) => res.sendfile(__dirname + '/index.html'));
app.get('/autenticacion', (req, res) => res.sendfile(__dirname + '/autenticacion.html'));
app.get('/cart', (req, res) => res.sendfile(__dirname + '/cart.html'));
app.get('/categories', (req, res) => res.sendfile(__dirname + '/categories.html'));
app.get('/category-info', (req, res) => res.sendfile(__dirname + '/category-info.html'));
app.get('/products', (req, res) => res.sendfile(__dirname + '/products.html'));
app.get('/product-info', (req, res) => res.sendfile(__dirname + '/product-info.html'));
app.get('/sell', (req, res) => res.sendfile(__dirname + '/sell.html'));

app.get('/css-styles', (req, res) => res.sendfile(__dirname + '/css/styles.css'));
app.get('/css-autenticacion', (req, res) => res.sendfile(__dirname + '/autenticacion.css'));
app.get('/css-drop', (req, res) => res.sendfile(__dirname + '/css/dropzone.css'));
app.get('/css-boots', (req, res) => res.sendfile(__dirname + '/css/bootstrap.min.css'));

app.get('/js-autentication', (req, res) => res.sendfile(__dirname + '/js/autentication.js'));
app.get('/js-cart', (req, res) => res.sendfile(__dirname + '/js/cart.js'));
app.get('/js-categories', (req, res) => res.sendfile(__dirname + '/js/categories.js'));
app.get('/js-category-info', (req, res) => res.sendfile(__dirname + '/js/category-info.js'));
app.get('/js-init', (req, res) => res.sendfile(__dirname + '/js/init.js'));
app.get('/js-payment-validation', (req, res) => res.sendfile(__dirname + '/js/paymentValidation.js'));
app.get('/js-products', (req, res) => res.sendfile(__dirname + '/js/products.js'));
app.get('/js-product-info', (req, res) => res.sendfile(__dirname + '/js/product-info.js'));
app.get('/js-sell', (req, res) => res.sendfile(__dirname + '/js/sell.js'));
app.get('/js-script', (req, res) => res.sendfile(__dirname + '/js/script.js'));
app.get('/js-userdb', (req, res) => res.sendfile(__dirname + '/js/users-db.js'));
app.get('/js-index', (req, res) => res.sendfile(__dirname + '/index.js'));
app.get('/js-vendor-bootbox', (req, res) => res.sendfile(__dirname + '/js/vendor/bootbox.min.js'));
app.get('/js-vendor-bootstrap', (req, res) => res.sendfile(__dirname + '/js/vendor/bootstrap.bundle.min.js'));
app.get('/js-vendor-dropzone', (req, res) => res.sendfile(__dirname + '/js/vendor/dropzone.js'));
app.get('/js-vendor-jquery', (req, res) => res.sendfile(__dirname + '/js/vendor/jquery-3.4.1.min.js'));
app.get('/img/:path', (req, res) => res.sendfile(__dirname + `/img/${req.params.path}`));

const PORT = 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

