const fs = require("fs");
const path = require("path");

const run = () => {
  // read one file, copy to another
  const lorumIpsumFilePath = path.join(__dirname, "assets", "lorum-ipsum.md");
  const lorumIpsumNewFilePath = path.join(
    __dirname,
    "assets",
    "lorum-ipsum-copy.md"
  );
  const writeCopyStream = fs.createWriteStream(lorumIpsumNewFilePath, "UTF-8");

  const readStream = fs.createReadStream(lorumIpsumFilePath, "UTF-8");
  readStream.on("data", (data) => {
    writeCopyStream.write(data);
  });

  readStream.on("end", () => {
    console.log(`^^^ finished reading file ^^^`);
  });
  // ** doesn't reach this, readStream ends file
  writeCopyStream.on("end", () => {
    console.log(`^^^ finished writing file ^^^`);
    // process.exit();
  });
};

run();
