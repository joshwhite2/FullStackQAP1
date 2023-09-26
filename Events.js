/*
Events 

Much of Node's API is built around emitters which emit events. These events trigger function objects (listeners).  
all objects that trigger an event belong to the EventEmitter class. All functions of a specific event are called synchronously to ensure the proper
sequence of events. 
Listener functions can switch to asynchronous using setImmediate() or process.nextTick() method, as well as using an event loop.

eventEmitter.on() is used to register the listeners.
eventEmitter.emit() is used to trigger the event.

*/
const EventEmitter=require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',function(){
    console.log('Listener called');
});

//Raise an event to trigger function
emitter.emit('messageLogged')

// Another example with multiple listeners and emitters

//Register a listener for triggerPulled event
emitter.on('flipSwitch',function(dadMessage){
    console.log(`Lights on ${dadMessage}`)
});

//Register a listener for duckAndDive event
emitter.on('offSwitch',function(dadMessage2){
    console.log(`Lights out! ${dadMessage2}`)
})
//Initialize messages
const dadMessage = '-dad: Turn off the lights when you leave the room!!!'
const dadMessage2 ='-dad: Turn on the lights so you can see what youre doing!!'

//Raise Events to trigger functions,



emitter.emit('flipSwitch', dadMessage);

emitter.emit('offSwitch', dadMessage2);




