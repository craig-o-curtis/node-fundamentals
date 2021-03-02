const fs = require("fs");
const path = require("path");
const util = require("util");

const md = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* rs.writeFile
`;

const run = () => {
  const newFilePath = path.join(__dirname, "assets", "notes.md");

  fs.writeFile(newFilePath, md.trim(), (err) => {
    if (err) {
      throw err;
    }
    util.log("file saved");
  });
};

run();
