const fs = require('fs');
const dataFolder = '../src/data/';

//Reformat my initial JSON files into the format needed for MongoDB import

fs.readdir(dataFolder, (err, files) => {
  files.forEach(file => {
    const fileName = `./src/json/${file}`;
    const fileData = require(fileName);
    const newFileEntry = [];

    for (let [key, value] of Object.entries(fileData)) {
      const object = { name: key }
      Object.assign(object, value)
      newFileEntry.push(object)
    }

    fs.writeFile(fileName, JSON.stringify(newFileEntry, null, 2), function writeJSON(err) {
      if (err) return console.log(err);
      console.log(`updating file ${fileName}`)
    });
  });
});