const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log(`${new Date().toLocaleString()} - ${message}`);
        this.emit('messageLogged', message)
    }
}


module.exports = Logger;
