const fs = require("fs");
const path = require("path");
const util = require("util");

// const files = fs.readdirSync("./programs/assets");

const assetFilePath = path.join(__dirname, "assets");

// Sync
const filesSync = fs.readdirSync(assetFilePath);

// Async
fs.readdir(assetFilePath, (err, files) => {
  if (err) {
    throw err;
  }

  util.log(files);
});
