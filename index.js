const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Esta sera el inicio d euna gran historia');
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
