var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var color = require('colors-cli/safe')
var colors = require('colors');

var error = color.red.bold;
var warn = color.yellow;
var notice = color.blue;
// console.log(error('Error!'));
// console.log(warn('Warning'));
// console.log(notice('Notice'));
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
    var lines = process.stdout.getWindowSize()[1];
                for(var i = 0; i < lines; i++) {
                console.log('\r\n');
                var fs = require("fs");

                }
    console.log("\nconnected as id ".yellow + connection.threadId);
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
        ['Product ID', 'Product name', 'Department name', 'stock_quantity','Price']
      )
      for (var i = 0; i < results.length; i++) {
        table.push(
          [results[i].id, results[i].product_name, results[i].department_name, results[i].stock_quantity, , results[i].price ]
       );
       }
      console.log(table.toString());
                    // console.log(table[1][3]);
                    // console.log(table[1][0]);

                    // console.log("this is quantity" + " " + quantity);
                    // table.push(table[1][3]);
                    // console.log(table[1][3]);
                    // console.log(table.toString());

      inquirer.prompt([
        {   type: "input",
            name: "id",
            message: "Enter the ID of the product you would like to buy. [Quit with Q]"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?"
        }
        
        ])
        .then(function(answer) {
          // console.log(answer.id)

          // get the information of the chosen item
          var chosenItem;
          var newStockQuantity;
          // for (var i = 0; i < table.length; i++) {
            // console.log(answer.id)

            if (table[1][0] == answer.id) {
              // console.log(answer.id)

              chosenItem = table[1][0];
              newStockQuantity = table[1][3] - answer.quantity;
              // console.log("uuuu" + answer.quantity);
              // console.log("hi");
              // console.log(chosenItem);
            }
          // }
          console.log(newStockQuantity);

  
          // determine if bid was high enough
          if (  table[1][3] < answer.quantity ) {
            console.log("\nI'm sorry we don't have this many units in stock.".red);
            
                start();
           }
          else {
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: newStockQuantity
                },
                {
                  id: chosenItem
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Bid placed successfully!");
                start();
              }
            );
           
            // ****estava funcionando
            // console.log("Your bid was too low. Try again...");
            // start();
            // ***&*********
          }
        });
})
}
               
        
       
        
        
        

















 
 


  








 

      
