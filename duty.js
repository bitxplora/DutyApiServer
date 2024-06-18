const express = require('express');

require('dotenv').config();

const DbService = require('./data/asyncData');
const db = new DbService();

const app = express();
const port = process.env.PORT || 3000;

app.get('/update', async (req, res) => {
    const data = await db.update();
    res.json(data);
  });

app.get('/searches/:term', async (req, res) => {
    const term = req.params.term;
    const data = await db.search(term);
    res.json(data);
  });

app.get('/exchanges/:exchangeCode', async (req, res) => {
    const exchangeCode = req.params.exchangeCode;
    const data = await db.exchangeRate(exchangeCode);
    res.json(data);
  });



app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
