var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tonux313"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connecte!");
  con.query("CREATE DATABASE dbAcademie", function (err, result) {
    if (err) throw err;
    console.log("Base Done");
  });
});
