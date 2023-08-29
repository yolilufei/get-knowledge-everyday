const fs = require('fs');
console.log(process.cwd(), process.execPath);
fs.stat(process.cwd(), (err, stats) => {
    console.log(stats);
})