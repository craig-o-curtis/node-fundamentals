const fs = require("fs");
const path = require("path");

/**
 * //** Streams to communicate with:
 * //** read write data to terminal
 * //** process
 * //** files
 * //** internet
 */

const run = () => {
  const mdPath = path.join(__dirname, "assets", "lorum-ipsum.md");
  const readStream = fs.createReadStream(mdPath, "utf-8");
  let fileText = "";

  // ** Reads 65525 chars at a time - uses less mem
  readStream.on("data", (data) => {
    console.log(`I read ${data.length - 1} chars of text`);
    fileText += data;
  });

  readStream.once("data", (data) => {
    console.log(data);
    console.log(data.length);
  });

  readStream.on("end", () => {
    console.log(`I read a total of ${fileText.length - 1} chars`);
    console.log(`^^^ finished reading file ^^^`);
  });
};

run();
