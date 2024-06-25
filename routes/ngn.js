const express = require('express');
const ngnRouter = express.Router();

const DbService = require('../data/asyncData');
const db = new DbService();

ngnRouter.get('/update', async (req, res) => {
    const data = await db.update();
    res.json(data);
  });

ngnRouter.get('/items/:search', async (req, res) => {
    const search = req.params.search;
    const data = await db.search(search);
    res.json(data);
  });

// ngnRouter.get('/items/:term', async (req, res) => {
//     const term = req.params.term;
//     const data = await db.search(term);
//     res.json(data);
//   });

ngnRouter.get('/exchanges/:exchangeCode', async (req, res) => {
    const exchangeCode = req.params.exchangeCode;
    const data = await db.exchangeRate(exchangeCode);
    res.json(data);
  });

ngnRouter.get('/items/:cetcode', async (req, res) => {
    const cetcode = req.params.cetcode;
    const data = await db.getCetCode(cetcode);
    res.json(data);
  });


module.exports = ngnRouter;
