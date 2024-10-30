const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);

    // Expensive operation
    let count = 0;
    for (let i = 0; i < 10000000; i++) {
        count += i;
    }
    console.log('result:', count);
});
