DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE products;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  stock_quantity INT default 0
  price INT default 0,
  PRIMARY KEY (item_id),
  
);

INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('bike', 'Sports', 100, 500);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('hat', 'Clothing', 200, 25);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('laptop', 'Electronics', 50, 400);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('shirt', 'Clothing', 300, 50);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('tenis shoes', 'Shoe', 100, 200);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('phone', 'Electronics', 100, 900);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('book', 'Book', 100, 20);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('backpack', 'Sports', 10, 60);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('tie', 'Clothing', 200, 50);
INSERT INTO products (product_name, department_name, stock_quantity, price) 
values               ('surfboard', 'Sports', 100, 600);
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);




SELECT * FROM products;


