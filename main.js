const sqlite3 = require('sqlite3').verbose();

let sql;

//connect to db
//---------------------------------------------------------------------------------------------------------
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});



//create a Table
//---------------------------------------------------------------------------------------------------------
// sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name, username, password, email)'
// db.run(sql);



// drop a table
//----------------------------------------------------------------------------------------------------------
// db.run("DROP TABLE users");



//insert data into table
//----------------------------------------------------------------------------------------------------------
// sql = `INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)`
// db.run(sql, ['Chris', 'Moore', 'moore33', '123@456_789', 'moore33@gamil.com'], (err) => {
//     if (err) return console.error(err.message);
// })

// sql = `INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)`
// db.run(sql, ['Mark', 'Skelton', 'marcus385', '432@123_987', 'skelton36@gamil.com'], (err) => {
//     if (err) return console.error(err.message);
// })


//update data
//--------------------------------------------------------------------------------------------------------
// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql, ['Jake', 1], (err) => {
//     if (err) return console.error(err.message);
// });

//delete data
//---------------------------------------------------------------------------------------------------------
// sql = `DELETE FROM users WHERE id = ?`;
// db.run(sql, [1], (err) => {
//     if (err) return console.error(err.message);
// });

//query the database
//---------------------------------------------------------------------------------------------------------
sql = `SELECT * FROM users`;
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach(row => {
        console.log(row);
    })
});