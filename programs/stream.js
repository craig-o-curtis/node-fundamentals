const fs = require("fs");
const path = require("path");
const util = require("util");
const throwErr = require("./lib/throwError.js");

/**
 * //** Streams to communicate with:
 * //** read write data to terminal
 * //** process
 * //** files
 * //** internet
 */

const run = () => {
  console.log("Type something...");

  process.stdin.on("data", (data) => {
    console.log(`I read ${data.length - 1} characters of text`);
    console.log(`Type 10 characters to exit`);
    if (data.toString().trim().length === 10) {
      process.exit();
    }
    console.log(`${data.toString().trim()}`);
  });
};

run();
