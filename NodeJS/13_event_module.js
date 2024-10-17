const EventEmitter = require('events'); // node: is used as prefix for build in modules
// event module let us work with events in nodejs
// event is occurance or action to which we can response
// in node we can create out own event and react to them

// console.log(EventEmitter);

const emitter = new EventEmitter();  // creating object of EventEmitter class

emitter.on('orderPizza', (size) => {       // creating an event listener for event 'orderPizza'
    console.log(`Making the ${size} Pizza`);
})

emitter.on('orderPizza', (size, type) => {      // creating an event listener for event 'orderPizza' but diff. body
    console.log(`Making ${size} sized pizza using ${type}`);
})

console.log("This will be printed first");  // this will be printed first

// emitter.emit('orderPizza', 'large');
emitter.emit('orderPizza', 'large', 'Pinnaple');        // broadcasting a new event 'orderPizza'

// this is example of event driven architecture


// *******************************************************