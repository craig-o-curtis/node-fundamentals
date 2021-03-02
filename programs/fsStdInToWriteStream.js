const fs = require("fs");
const path = require("path");

const run = () => {
  const writeFilePath = path.join(__dirname, "assets", "terminal-write.txt");
  const writeStream = fs.createWriteStream(writeFilePath, "utf-8");

  process.stdin.pipe(writeStream);

  process.stdin.on("data", (data) => {
    if (data.toString().trim() === "exit") {
      process.exit();
    }
  });
};

run();
