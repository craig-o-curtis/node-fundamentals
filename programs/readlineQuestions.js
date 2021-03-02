const util = require("util");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What is your name?\n",
  "Where do you live?\n",
  "What will you do with Node?\n",
];

// f => f - dummy fn
const run = (questions, handleExit = (f) => f) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      handleExit(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);
};

const handleExit = (answers) => {
  util.log("Thank you for your answers");
  util.log(answers);
  process.exit();
};

// run(questions, (answers) => handleExit(answers));
run(questions, handleExit);
