const sqlite3 = require('sqlite3').verbose();
const path = require('path');

class DbService {

  dbService;
  dbSource = path.resolve(__dirname, "tariff.db");


  constructor() {
    this.dbService = new sqlite3.Database(this.dbSource, sqlite3.OPEN_READONLY, (err) => {
      if (err) {
        return console.error(err.message);
      }
      // console.log('Connected');
    });
  }

  update() {
    return new Promise((resolve, reject) =>  {

      const updateQuery = `SELECT last FROM update_t`;

      this.dbService.get(updateQuery, (err, updateResult) => {
        if (err) {
          reject(err);
        }
          resolve(updateResult);
      });
    });
  }
}


module.exports = DbService;
