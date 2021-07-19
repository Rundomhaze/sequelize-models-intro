## Introduction to Sequelize

Install sequlize and sequlize-cli. You will complete a few small tasks to familiarize yourself with Sequelize models. You will need to incorporate users, products, and orders, meaning that you can create a website for online shopping, home food ordering, etc.

### Releases

### Release 0. Design
- Connect your database.
- Create 2 models using sequlize-cli: User and Product.
- Using Sequelize's documentation, explore various possible data types and give each model 3-7 fields for realism.

### Release 1. Communication, data
- Connect the Products and Users. For now, we will connect the users and their favorite products (For example: `User Peter likes Bananas`). We need to give users a favouriteProducts field (each user can have only one favorite product).
- Populate your database.

### Release 2. Order

- Create an Order model, which will also connect the Users and Products. Order can have data parts from both User and Product, or simply refer to both.
- Create some Orders.

### Release 3. Requests

- Find all orders.
- Find specific user's order.
- Experiment with other queries. You can use various [methods and properties](https://sequelize.org/master/manual/model-querying-basics.html). How are "raw" queries different from model queries?
- Now clear your database.
- Don't forget to disconnect the database.

## Conclusion

This code resembles test database work: creating a database, filling with data, testing its necessary functions, and clearing it. Real developers follow this principle to asses databases. 
