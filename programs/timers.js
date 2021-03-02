const waitTime = 5000;
const waitInterval = 500;
let currTime = 0;
let timeout = 0;
let interval = 0;

const timeoutCb = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
};

const intervalCb = () => {
  currTime += waitInterval;
  let percentage = Math.floor((currTime / waitTime) * 100);

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${percentage}%`);

  if (currTime === waitTime) {
    process.exit();
  }
};

process.on("exit", () => {
  clearTimeout(timeout);
  clearInterval(interval);
  process.stdout.write("^^^ ending program ^^^\n");
});

const run = () => {
  process.stdout.write("--- starting program ---\n");
  console.log(`Setting a ${waitTime / 1000} second delay...`);
  interval = setInterval(intervalCb, waitInterval);
  timeout = setTimeout(timeoutCb, waitTime);
};

run();
