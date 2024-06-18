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

  search(term) {
    return new Promise((resolve, reject) =>  {

      const updateQuery = `SELECT * FROM tariff_fts WHERE tariff_fts MATCH ? ORDER BY RANK`;

      this.dbService.all(updateQuery, [term,], (err, searchResult) => {
        if (err) {
          console.log(err);
          reject(err);
        }
          console.log(searchResult);
          resolve(searchResult);
      });
    });
  }

}

// const db = new DbService();
// db.search('7507200000');


module.exports = DbService;
