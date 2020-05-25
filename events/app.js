const EventEmitter = require('events');
const Logger = require('./logger.js');
const logger = new Logger();


logger.on('messageLogged', (e) => {
    console.log("logged message", e);
})

logger.log('test');
