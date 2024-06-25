const sqlite3 = require('sqlite3').verbose();
const path = require('path');

require('dotenv').config();

class DbService {

  dbService;
  dbSource = path.resolve(__dirname, process.env.DB);


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

  search(item) {
    return new Promise((resolve, reject) =>  {

      const updateQuery = `SELECT * FROM tariff_fts WHERE tariff_fts MATCH ? ORDER BY RANK`;

      this.dbService.all(updateQuery, [item], (err, searchResult) => {
        if (err) {
          reject(err);
        }
          resolve(searchResult);
      });
    });
  }

  // search(item) {
  //   return new Promise((resolve, reject) =>  {

  //     const updateQuery = `SELECT * FROM tariff_fts WHERE tariff_fts MATCH ? ORDER BY RANK`;

  //     this.dbService.all(updateQuery, [item,], (err, searchResult) => {
  //       if (err) {
  //         reject(err);
  //       }
  //         resolve(searchResult);
  //     });
  //   });
  // }

  exchangeRate(exchangeCode) {
    return new Promise((resolve, reject) =>  {

      const updateQuery = `SELECT * FROM exchange WHERE code = ?`;

      this.dbService.get(updateQuery, [exchangeCode,], (err, searchResult) => {
        if (err) {
          reject(err);
        }
          resolve(searchResult);
      });
    });
  }

  getCetCode(cetcode) {
    return new Promise((resolve, reject) =>  {

      const updateQuery = `SELECT * FROM tariff_fts WHERE cetcode = ?`;

      this.dbService.get(updateQuery, [cetcode], (err, searchResult) => {
        if (err) {
          reject(err);
        }
          resolve(searchResult);
      });
    });
  }

}


module.exports = DbService;
