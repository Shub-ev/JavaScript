const obj = require('./14_all_modules');

const pizzaShop = new obj.PizzaShop();

pizzaShop.on('orderPizza', (size, toppins) => {
    console.log(`Order: \nSize: ${size} Toppins: ${toppins}`);
})

pizzaShop.order('large', 'pinaple');
pizzaShop.displayOrders();

console.log("This will be displayed first");