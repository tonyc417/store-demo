CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER(20)
    AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INTEGER(10),
    stock_quantity INTEGER(100),
	PRIMARY KEY (item_id)
    
);