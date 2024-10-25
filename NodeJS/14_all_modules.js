const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor(){
        super();
        this.count = 0;
    }

    order = (size, toppins) => {
        this.count++;
        this.emit('orderPizza', size, toppins);
    }

    displayOrders = () => {
        console.log(`Total number of Orders: ${this.count}`);
    }
}

module.exports = {
    PizzaShop,
}