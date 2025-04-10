const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Node.js App Running in AKS!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
