const express = require('express');

const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000;

const ngnRouter = require('./routes/ngn');

app.use('/', ngnRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
