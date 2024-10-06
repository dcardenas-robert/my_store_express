const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Esta sera el inicio d euna gran historia');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('hola soy una nueva ruta');
});
app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'Product 2',
    price: 2000,
  });
});

app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
