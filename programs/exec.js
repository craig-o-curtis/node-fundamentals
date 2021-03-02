// ** execute external system commands for sync processes

// child process
const cp = require("child_process");
const throwErr = require("./lib/throwError");

// cp.exec("open http://www.linkedin.com");
cp.exec("open -a Terminal .");
cp.exec("ls", (err, data, stderr) => {
  throwErr(err);
  console.log(data);
  console.log(stderr);
});
cp.exec("node programs/fsReadStream.js", (err, data, stderr) => {
  console.log(data);
});
