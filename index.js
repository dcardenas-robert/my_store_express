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
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
