const fs = require('fs');
const jsonFolder = './src/data/';

fs.readdir(jsonFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
    const fileName = `./src/json/${file}`;
    const fileData = require(fileName);
    const newFileEntry = [];

    for (let [key, value] of Object.entries(fileData)) {
      const object = { name: key }
      Object.assign(object, value)
      newFileEntry.push(object)
    }

    console.log(newFileEntry)

    fs.writeFile(fileName, JSON.stringify(newFileEntry, null, 2), function writeJSON(err) {
      if (err) return console.log(err);
    });
  });
});