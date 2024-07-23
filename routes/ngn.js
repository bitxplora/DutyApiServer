const express = require('express');
const ngnRouter = express.Router();

const DbService = require('../data/asyncData');
const db = new DbService();

ngnRouter.get('/update', async (req, res) => {
    const data = await db.update();
    res.json(data);
  });

ngnRouter.get('/items/:item', async (req, res) => {
    const item = req.params.item;
    const data = await db.search(item);
    res.json(data);
  });

ngnRouter.all('/exchanges', async (req, res) => {
    let currencies = req.query.currencies;
    const data = await db.currency(currencies);
    res.json(data);
  });

ngnRouter.get('/exchanges/:exchangeCode', async (req, res) => {
    let exchangeCode = req.params.exchangeCode;
    const data = await db.exchangeRate(exchangeCode);
    res.json(data);
  });

ngnRouter.get('/cetcodes/:cetcode', async (req, res) => {
    const cetcode = req.params.cetcode;
    const data = await db.getCetCode(cetcode);
    res.json(data);
  });


module.exports = ngnRouter;
