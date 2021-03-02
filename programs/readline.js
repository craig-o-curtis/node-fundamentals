const readline = require("readline");

//** use diff streams for input and output */
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question("How do you like Node?\n", (answer) => {
  console.log(`Your answer: ${answer}`);
});
