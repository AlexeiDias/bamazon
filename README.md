# bamazon

## Bamazon sudo code

##### Create a database on mysql and call it amazon
##### Create a table in the database bamazon and call it products
##### Create a list of product with 
##### Product Name
##### Department  the product belongs
##### Quantity in stock 
##### Price
##### unic id for each product with auto increment and make id primary key
##### Select all products from the table products
##### Display result to user

#### Ask questions to the user
##### Use inquirer to prompt	
##### What is the id of the product you want to buy?
##### How many units you want to buy?
##### Use .then to get a hold of the answers from the prompt

##### Give a chance to the user to quit the app when they type letter “Q”
##### If use choice id is equal to 	“q”
##### end connection and quit the app

##### Check if user s choice id is on product table
##### If is not display message “id not found, please enter valid id and restart the app
##### If id is on products table, check if the number of units that user wants to buy is available in products table on stock_quantity table

##### if is not, display message  ‘ we don’t have this many units in stock  and restart the app
##### if it is , deduct the quantity the user wants to buy from the products table stock_quantity total
##### display message “ thanks for your business and restart the app
##### Use the user response to evaluate if it was a letter “Q” or a id  number that exist on the products table within the id colunm 
##### Check if the quantity  that  the user  want is available in stock
##### If it is not tell the user that the quantity is not available 
##### If quantity the user wants is available deduct the quantity from the total in stock
##### Restart the app

### Technologies to be used
    *GitHub
    *Inquirer
    *Json
    *MySql
    *JavaScript

#### Author
Author
 Alexei Dias
 Linkedin 
 https://www.linkedin.com/in/alexei-dias-b4054a164/


