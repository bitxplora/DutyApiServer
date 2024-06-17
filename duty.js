const express = require('express');

require('dotenv').config();

const DbService = require('./data/asyncData');
const db = new DbService();

const app = express();
const port = process.env.PORT || 3000;

app.get('/update', (req, res) => {
  (async () => {
    res.json(await db.update())
  })();
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
