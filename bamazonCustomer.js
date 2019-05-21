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
            console.log("Item ID: " + res[i].item_id + " " + res[i].product_name + "\t" + 
            res[i].department_name + "\t" + 
            res[i].price + "\t" + 
            res[i].stock_quantity);
        }
    }); 
}

runSearch = () => { inquirer.prompt({
    name: 'theme',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
        'Check the inventory?',
        'Buy an item?'
    ]
}).then(function(choices) {
    switch(choices.theme) {
        case "Check the inventory?":
        checkInventory();
        break;

        case "Buy an item?":

    }
    // console.log(choices);
    connection.end();
})};

buyItem = () => {

}