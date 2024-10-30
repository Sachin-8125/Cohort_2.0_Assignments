const fs = require('fs');

const data = 'hi there';

fs.writeFile('output.txt', data, 'utf8', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Filewritten.');

    // Expensive operation
    let count = 0;
    for (let i = 0; i < 1e7; i++) {
        count += i;
    }
    console.log('result:', count);
});
