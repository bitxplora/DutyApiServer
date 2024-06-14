const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/update', (req, res) => {
  res.json({last: '2024-05-21:16.388'})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
