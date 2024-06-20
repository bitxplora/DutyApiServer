const express = require('express');
const compression = require('compression');

const ngnRouter = require('./routes/ngn');

const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(compression());
app.use('/', ngnRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
