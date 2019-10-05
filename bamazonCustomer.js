var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var color = require('colors-cli/safe')
var error = color.red.bold;
var warn = color.yellow;
var notice = color.blue;
console.log(error('Error!'));
console.log(warn('Warning'));
console.log(notice('Notice'));
// var quantity = 0;
var pName;

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
  });
  
  // *********************    Load the talbe ***************************
  function start() {
    // connection.end();
   connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      var table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
               , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
               , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
               , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
      });
      table.push (
        ['Product ID', 'Product name', 'Department name', 'Quantity in stock','Price']
      )
      for (var i = 0; i < results.length; i++) {
        table.push(
          [results[i].id, results[i].product_name, results[i].department_name, results[i].stock_quantity, , results[i].price ]
       );
       }
      console.log(table.toString());

      inquirer.prompt([
        {   type: "input",
            name: "id",
            message: "Enter the ID of the product you would like to buy. [Quit with Q]"
        },
        
        ])
        .then(function(response) {
          if (response.id  === "q") {
                console.log("thanks for comming");
                connection.end();
                var lines = process.stdout.getWindowSize()[1];
                for(var i = 0; i < lines; i++) {
                console.log('\r\n');
                var fs = require("fs");

                }
              } else {
                inquirer.prompt([
                  {   type: "input",
                    name: "quantity",
                    message: "how many units of this product  would you like to buy??? [Quit with Q]"
                },
                ])
                .then(function(response) {
                  if (response.quantity  === "q") {
                    // console.log(response);
                    console.log("thanks for comming");
                    connection.end();
                    var lines = process.stdout.getWindowSize()[1];
                for(var i = 0; i < lines; i++) {
                console.log('\r\n');
                var fs = require("fs");

                }
                  } else {
                    connection.query(
                      "UPDATE products SET ? WHERE ?",
                      [
                        {
                          stock_quantity: response.quantity
                        },
                        {
                          id: response.id
                        }
                      ],
                      function(error) {
                        if (error) throw err;
                        console.log("\nPurchase of succesful!\n");
                        start();
                      }
                    );
                  }

                  // start();
})
}
})
})
}
                  // else {
                    // 
        //             console.log(table[1][3]);
        //             console.log("this is quantity" + " " + quantity);
        //             table.push(table[1][3]);
        //             console.log(table[1][3]);
        //             console.log(table.toString());
        
        
        // }
        
       
        
        
        

















 
 


  








 

      
