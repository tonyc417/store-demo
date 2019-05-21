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

checkInventory = () => {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].product_name + "\t" + 
            res[i].department_name + "\t" + 
            res[i].price + "\t" + 
            res[i].stock_quantity);
        }
        connection.end();
    }); 
}

runSearch = () => { inquirer.prompt({
    name: 'action',
    type: 'list-input',
    message: 'What would you like to do?',
    choices: [
        'Check the inventory?',
        'Buy an item?'
    ]
}).then(function(choices) {
    console.log(choices);
    connection.end();
})};
