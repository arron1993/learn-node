const fs = require('fs');


fs.readdir('./', (err, files) => {
    for(let file of files) {
        fs.readFile(file, 'utf8', (err, data) => {
            console.log(file);
            console.log(data);
        })
    }
})
