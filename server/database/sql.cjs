const mysql = require('mysql')

var config = {
    host: "localhost",
    user: "root",
    password: "",
    database: 'gym'
};

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

module.exports = {
    connection: mysql.createConnection(config)
}