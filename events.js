const events = require('events');
  const eventEmitter = new events.EventEmitter();
const myEventHandler = function () {
  console.log('Door was opened!');
}
eventEmitter.on('Door', myEventHandler);

eventEmitter.emit('Door');
