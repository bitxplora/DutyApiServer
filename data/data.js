const sqlite3 = require('sqlite3').verbose();

const dbSource = 'tariff.db';
const dbService = new sqlite3.Database('./tariff.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected');
}); 


let updateQuery = `SELECT last FROM update_t`;

dbService.get(updateQuery, (err, updateResult) => {
  if (err) {
    return console.error(err.message);
  }
  return updateResult
    ? console.log(updateResult)
    : console.log(`Empty ${updateQuery}`);
});
