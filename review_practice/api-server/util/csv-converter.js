const csv = require('csv-parser');
const fs = require('fs');

const filePath = process.argv[2];
const fileName = filePath.split('.')[0];
const targetPath = process.argv[3];

const results = [];

fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', data => {
        for (key in data) {
            if (data[key] === 'TRUE') data[key] = true;
            else if (data[key] === 'FALSE') data[key] = false;
            else if (data[key] === 'null') data[key] = null;
            else if (!isNaN(data[key])) data[key] = Number(data[key]);
        }

        results.push(data);
    })
    .on('error', err => console.log('Fail', err))
    .on('end', () => saveToJsonFile(results));

const saveToJsonFile = data => {
    fs.writeFile(`${targetPath}/${fileName}.json`, JSON.stringify(data, null, 4), err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been created');
    });
};
