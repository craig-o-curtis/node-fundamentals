const fs = require("fs");
const path = require("path");
const util = require("util");
const throwErr = require("./lib/throwError.js");
const colorData = require("./assets/colors.json");

// do not need fs to read json

const run = () => {
  const storageFilesDirPath = path.join(__dirname, "storage-files");
  const colorsMdFilePath = path.join(storageFilesDirPath, "colors.md");

  colorData.colorList.forEach((color) => {
    // appendFile creates file if doesn't exist
    fs.appendFile(
      // "./programs/storage-files/colors.md",
      colorsMdFilePath,
      `${color.name}: ${color.hex}\n`,
      (err) => {
        throwErr(err);
      }
    );
  });
  util.log("complete");
};

run();

module.exports = run;
