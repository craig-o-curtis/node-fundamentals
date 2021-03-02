# Node basics

Goal

- Command line tools
- Servers with Express
- File system

Node History

- 2009 Ryan Dahl, JS Runtime based on Chrome's v8 Engine
- 2011 npm v1 - sharing open source node libs
- 2015 Node Foundation - Microsoft, Paypal, IBM, Groupon

Node General

- non-blocking, single-threaded
- events in event queue, handled in that order
- asynchronous

Node Basics

```
const path = require('path');

// __dirname (full path)
// __filename (full path)

const filename = path.basename(__filename);

```

- files are modules
- process object

Process

- exit()
- on events
  - data
  - exit
- stdout
  - write()
  - cursorTo())
  - clearLine()

Core

- util - logging
- path - getting path names
- fs - reading / writing files
- v8 - mem
- events - pubsub
- readline

```
const path = require("path");
const util = require("util");
const v8 = require("v8");
const events = require("events");
const readline = require("readline");

const dirUploads = path.join(__dirname, "www", "files", "uploads");
// makes ./www/files/uploads folder


const storageFilesDirPath = path.join(__dirname, "storage-files", 'colors.md);
// makes ./storage-files/colors.md file

//** use diff streams for input and output */
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question("How do you like Node?\n", (answer) => {
  console.log(`Your answer: ${answer}`);
});
```

Modules

- module.exports =
- var myvar = require('./path');

Events

- pubsub events

```
const events = require("events");

const emitter = new events.EventEmitter();

emitter.emit("customEvent", "Hello World", "Computer");

emitter.on("customEvent", (message, user) => {
  util.log(`${user}: ${message}`);
});
```

fs - FileSystem

- exists() / existsSync()
- mkDir() / mkDirSync()
- readdir() / readdirSync()
- rename() / renameSync()
- unlink() / unlinkSync
- writeFile()
- appendFile() // creates or modifies
- readFile

```
// check if dir exists sync
const dirExists = fs.existsSync('./storage-files');
// async
fs.exists('./storage-files', cb);

// mkdir
fs.mkdirSync('./storage-files');
fs.mkdir('./storage-files', cb)

// readdir
fs.readdirSync(dirpath).forEach()
fs.readdir(pathname, (err, data) => {})

// rmdir
fs.rmdirSync(newDirPath2);
fs.rmdir(newDirPath2, cb);

// rename
fs.rename(oldDirPath,newDirPath)
fs.renameSync(oldDirPath,newDirPath, cb)

// unlink - delete file
fs.unlinkSync("./programs/storage-files/colors.md");

// write file
fs.writeFile(filePath, 'content', (err)=>handleErr(err))
fs.writeFileSync(filePath, 'content')

// create -- creates if doesn't exist
fs.appendFile('./destination/folder.file.md', 'text to add', (err) => handle(err))

// readFile
fs.readFile(filePath, 'utf-8', (err, data) => {})
fs.readFileSync(filePath, 'utf-8')
```

Streams

- fs.createReadStream
- fs.createWriteStream
- on
  - data
  - end
- once
  - data

```
// READ
const fs = require("fs");
const path = require("path");

const mdPath = path.join(__dirname, "assets", "lorum-ipsum.md");
const readStream = fs.createReadStream(mdPath, "utf-8");
let fileText = "";

readStream.on("data", (data) => {
    fileText += data;
});

readStream.once("data", (data) => {
    console.log(data.length);
});

readStream.on("end", () => {
    console.log(`I read a total of ${fileText.length - 1} chars`);
});


// WRITE (uses proces.stdin.on to get user input
const newFilePath = path.join(__dirname, "assets", "write-stream.txt");
  const writeStream = fs.createWriteStream(newFilePath, "UTF-8");

  writeStream.write("hello world\n");

  process.stdin.on("data", (data) => {
    writeStream.write(data);

    if (data.toString().trim() === "exit") {
      process.exit();
    }
  });
```

Child Process

- open a URL - cp.exec('open www.google.com')
- open an application
- run commands in terminal
- run node commands

```
// child process
const cp = require("child_process");

cp.exec("open http://www.linkedin.com");
cp.exec("open -a Terminal .");
cp.exec("ls", (err, data) => {
  throwErr(err);
  console.log(data);
});
cp.exec("node programs/fsReadStream.js", (err, data, stderr) => {
  console.log(data);
});
```
