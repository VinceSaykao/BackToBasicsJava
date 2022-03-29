--1 
Get all customers and their addresses.

select customers.first_name, addresses
from addresses
join customers 
on customers.id = addresses.customer_id 
order by customers.first_name;

--2
Get all orders and their line items (orders, quantity and product).

select orders,line_items.quantity,products.description 
from orders 
join line_items on orders.id = line_items.order_id 
join products on products.id = line_items.product_id
order by orders.id 

--3
Which warehouses have cheetos?

select warehouse.warehouse from warehouse 
join warehouse_product on warehouse_product.warehouse_id = warehouse.id 
join products on warehouse_product.product_id = products.id
where products.description = 'cheetos' order by warehouse.warehouse;

--4
Which warehouses have diet pepsi?

select warehouse.warehouse from warehouse join warehouse_product on warehouse_product.warehouse_id = warehouse.id 
join products on warehouse_product.product_id = products.id
where products.description = 'diet pepsi' order by warehouse.warehouse;

--5
Get the number of orders for each customer. NOTE: It is OK if those without orders are not included in results.

select customers.first_name,count(orders) 
from customers 
join addresses 
on addresses.customer_id = customers.id 
join orders 
on orders.address_id = addresses.id 
group by customers.first_name;

--6
How many customers do we have?

select count(customers.id) as customer_count from customers;

--7
How many products do we carry?

select count(products.description) as product_count from products;

--8
What is the total available on-hand quantity of diet pepsi?

select products.description, sum(line_items.quantity) as diet_pepsi_count from line_items 
join products on products.id = line_items.product_id where products.description = 'diet pepsi' group by products.description order by products.description;

