const events = require("events");
const util = require("util");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  util.log(`${user}: ${message}`);
});

const run = () => {
  emitter.emit("customEvent", "Hello World", "Computer");
  emitter.emit("customEvent", "Cool", "Me");

  process.stdin.on("data", (data) => {
    const input = data.toString().trim();

    if (input === "exit") {
      emitter.emit("customEvent", "Goodbye", "process");
      process.exit();
    }

    emitter.emit("customEvent", input, "terminal");
  });
};

run();
