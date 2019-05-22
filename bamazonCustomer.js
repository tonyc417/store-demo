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
        buyItem();
        break;
    }
    // connection.end();
})};

buyItem = () => {
    inquirer.prompt({
        name: 'testing',
        type: 'input',
        message: 'Please input the ID for the item you want to buy'
    }).then(function(answer) {
        switch(answer.testing) {
            case "1":
            buyNew();
            break;

            case "2":
            buyNew();
            break;

            case "3":
            buyNew();
            break;

            case "4":
            buyNew();
            break;

            case "6":
            buyNew();
            break;

            case "7":
            buyNew();
            break;
            
            case "8":
            buyNew();
            break;

            case "9":
            buyNew();
            break;

            case "10":
            buyNew();
            break;
        }
    })
}

function buyNew() {
    inquirer.prompt({
        name: "quantity",
        type: 'input',
        message: 'How many would you like to purchase?' 
    }).then(function(answer) {
        if(answer.quantity > 10) {
            console.log("There is only 10 avaiable sorry");
        }
        connection.end();
    })
};

