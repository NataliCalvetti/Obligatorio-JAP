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

