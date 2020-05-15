const fs = require('fs');
const dataFolder = '../backend/data/';

//Reformat my initial JSON files into the format needed for MongoDB import
fs.readdir(dataFolder, (err, files) => {
  const combinedJsons = [];

  files.forEach(file => {
    const fileName = `${dataFolder}/${file}`;
    const fileData = require(fileName);

    fileData.forEach(entry => combinedJsons.push(entry))
  });

  fs.writeFile('../backend/beasts.json', JSON.stringify(combinedJsons, null, 2), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(`updating file: all.json`)
  });
});