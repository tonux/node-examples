var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tonux313",
  database: "dbAcademie"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connecte!");
  var sql = "CREATE TABLE membres (nom VARCHAR(255), telephone VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table done");
  });
});
