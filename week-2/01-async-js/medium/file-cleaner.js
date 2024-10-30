const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    // Remove extra spaces
    const cleanedData = data.replace(/\s+/g, ' ').trim();
    
    //update the file
    fs.writeFile('file.txt', cleanedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('File has been updated and saved.');
    });
});
