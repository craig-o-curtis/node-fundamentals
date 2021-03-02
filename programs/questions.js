// ** process.stdin
// ** process.stdout - writable stream, .write() method to terminal

process.stdout.write("Welcome to a  ");
process.stdout.write("Simple Node game!\n");

const questions = [
  "What is your name?",
  "What would you rather do now?",
  "What is your preferred coding language?",
];

const run = (questionIndex = 0) => {
  process.stdout.write(`\n${questions[questionIndex]}`);
  process.stdout.write("\n");
  process.stdout.write(" > ");
};

const answers = [];

//** on data - typedd in keyboard, pressed enter */
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());

  if (answers.length === questions.length) {
    process.exit();
  }

  run(answers.length);
});

// ** fired on process.exit */
process.on("exit", () => {
  const [name, activity, language] = answers;
  console.log(`
    Thank you for your answers.

    Go ${activity}, ${name}, you can write ${language} code later!
  
  `);
});

run();
