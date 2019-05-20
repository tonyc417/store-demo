var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected as ID: ' + connection.threadId);
    runSearch();
})

// checkInventory = () => {
//     connection.query("SELECT * FROM products", (err, res) => {
//         if (err) throw err;
//         var testing = res.map(item => item);
//         console.log(testing);
//         connection.end();
//     });
// }

runSearch = () => { inquirer.prompt([{
    type: 'input',
    name: 'checkInventory',
    message: 'Would you like to check our inventory?'
}]).then(function(response) {
    console.log(response);
    connection.end();
    console.log("Connection Ended");
})};
