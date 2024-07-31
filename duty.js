const express = require('express');
const https = require('https');
const fs = require('fs');

const cors = require('cors');
const compression = require('compression');

const ngnRouter = require('./routes/ngn');

const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

const keyFile = fs.readFileSync(__dirname + "/certs/duti.key", 'utf-8');
const certFile = fs.readFileSync(__dirname + "/certs/duti.cert", 'utf-8');

const options = {key: keyFile, cert: certFile};

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; connect-src 'self' http://10.35.53.85:5000;"
    );
    next();
});
app.use(cors({origin: '*'}));
app.use(compression());

app.use('/ngn', ngnRouter);

https
  .createServer(options, app)
  .listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
