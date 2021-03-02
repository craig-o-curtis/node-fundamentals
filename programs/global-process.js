// ** process object
// ** process.pid
// ** process.versions.node

console.log("the process object");
console.log(process.pid);
console.log(process.versions.node);
console.log({ ...process.versions });
console.log(process.env);
console.log(process.env.USER);
console.log(process.env.HOME);
console.log(process.env.LOGNAME);

// get info from terminal
/** //** process.argv
 * //**  everything typed to run process
 **/
console.log(process.argv);

// const [, , firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);

const grab = (flag) => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const user = grab("--user");
const greeting = grab("--greeting");

console.log(`${greeting}: ${user}`);
