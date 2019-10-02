var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

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
    afterConnection();
  });
  
  function afterConnection() {
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

            [results[i].item_id, results[i].product_name, results[i].department_name, results[i].stock_quantity, , results[i].price ]
           
        );
        }
      console.log(table.toString());
      // startpage();
    })
     
    }

  // function startpage() {
  //   // query the database for all items being auctioned
  //   //   if (err) throw err;
  //     // once you have the items, prompt the user for which they'd like to bid on
  //     inquirer
  //       .prompt([
  //         {
  //           type: "input",
  //           name: "name",
  //           message: "Who are you???"
  //         },
         
  //       ])
      
   
  // }
  // startpage();
