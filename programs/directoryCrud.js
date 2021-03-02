const fs = require("fs");
const path = require("path");
const util = require("util");
const throwErr = require("./lib/throwError.js");

let timeouts = [];

const run = () => {
  const newDirPath1 = path.join(__dirname, "dir1");
  const newDirPath2 = path.join(__dirname, "dir2");
  const dir1Exists = fs.existsSync(newDirPath1);
  const dir2Exists = fs.existsSync(newDirPath2);

  const t1 = setTimeout(() => {
    if (dir2Exists) {
      fs.readdirSync(newDirPath2).forEach((fileName) => {
        fs.unlinkSync(`${newDirPath2}/${fileName}`);
      });
      fs.rmdirSync(newDirPath2);
    }
  }, 500);
  const t2 = setTimeout(() => {
    fs.mkdirSync(newDirPath1);
  }, 1000);
  const t3 = setTimeout(() => {
    const newFilePath = path.join(newDirPath1, "notes.md");
    const md = `
      # This is a new file

      We can write text to a file with fs.writeFile

      * fs.readdir
      * fs.readFile
      * rs.writeFile
    `;

    fs.writeFile(newFilePath, md.trim(), (err) => {
      if (err) {
        throw err;
      }
      util.log("file saved");
    });
    // fs.writeFileSync(newFilePath, md.trim());
  }, 1500);
  const t4 = setTimeout(() => {
    fs.renameSync(newDirPath1, newDirPath2);
  }, 2000);
  const t5 = setTimeout(() => {
    console.log(dir1Exists);
    console.log(dir2Exists);
    fs.readdir(newDirPath2, (err, d) => {
      console.log("read dir");
      console.log(d);
    });
  }, 2500);

  timeouts.concat(t1, t2, t3, t4, t5);
};

process.on("exit", () => {
  timeouts.forEach((timeout) => clearTimeout(timeout));
  process.stdout.write("^^^ ending program ^^^\n");
});

run();
