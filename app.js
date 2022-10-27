console.log("Hello World!\n==========\n");

let magicNumber = 6;

let guessMagicNumber = prompt("what's the magic number?")

if (guessMagicNumber > magicNumber) {
  console.log("too high!");
} else if (guessMagicNumber < magicNumber) {
  console.log("too low!");
} else {
  console.log("congratulations!!")
}

console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
