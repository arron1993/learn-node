const path = require('path');
const os = require('os')
let pathObj = path.parse(__filename);

console.log(pathObj)

console.log(os.uptime());
let totalMem = os.totalmem();
let freeMem = os.freemem();
let freePercentage = Math.round((freeMem / totalMem) * 100, 10);

console.log(freePercentage + "%");
