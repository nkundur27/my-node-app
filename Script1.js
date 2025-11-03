const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello from Node.js');
});

app.listen(5000, '0.0.0.0', () => {
  console.log(`Server running at http:// 13.203.103.17:5000`);
});

