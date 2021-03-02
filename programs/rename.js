// Expand assets and storage-files dirs, watch magic\
const fs = require("fs");
const path = require("path");
// const util = require("util");
const throwErr = require("./lib/throwError.js");
const newColorsMdFile = require("./appendFile");

let timeouts = [];

const run = () => {
  const storageFilesDirPath = path.join(
    __dirname,
    "storage-files",
    "colors.md"
  );

  // Sync
  fs.renameSync(
    "./programs/assets/colors.json",
    "./programs/assets/colorData.json"
  );

  // Async
  const timeout1 = setTimeout(() => {
    fs.rename(
      "./programs/assets/colorData.json",
      "./programs/assets/colors.json",
      (err) => throwErr(err)
    );
  }, 1000);

  // can cp files too
  const timeout2 = setTimeout(() => {
    fs.rename(
      "./programs/assets/colors.json",
      "./programs/storage-files/colors.json",
      (err) => throwErr(err)
    );
  }, 2000);

  const timeout3 = setTimeout(() => {
    fs.rename(
      "./programs/storage-files/colors.json",
      "./programs/assets/colors.json",
      (err) => throwErr(err)
    );
  }, 3000);

  const timeout4 = setTimeout(() => {
    // deletes files
    fs.unlinkSync("./programs/storage-files/colors.md");
  }, 4000);

  const timeout5 = setTimeout(() => {
    newColorsMdFile();
  }, 5000);

  timeouts.concat(timeout1, timeout2, timeout3, timeout4, timeout5);
};

process.on("exit", () => {
  timeouts.forEach((timeout) => clearTimeout(timeout));

  process.stdout.write("^^^ ending program ^^^\n");
});

run();
