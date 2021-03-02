const fs = require("fs");
const path = require("path");
const util = require("util");
const throwErr = require("./lib/throwError.js");

const run = () => {
  process.stdout.write("I");
  process.stdout.write(" ");
  process.stdout.write("will");
  process.stdout.write(" ");
  process.stdout.write("write");
  process.stdout.write(" ");
  process.stdout.write("a");
  process.stdout.write(" ");
  process.stdout.write("file");
  process.stdout.write("...");
  process.stdout.write("\n");

  // write from terminal
  const newFilePath = path.join(__dirname, "assets", "write-stream.txt");
  const writeStream = fs.createWriteStream(newFilePath, "UTF-8");

  writeStream.write("hello world\n");
  process.stdin.on("data", (data) => {
    writeStream.write(data);

    if (data.toString().trim() === "exit") {
      process.exit();
    }
  });
};

run();
