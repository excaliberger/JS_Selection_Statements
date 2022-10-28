console.log("Hello World!\n==========\n");

// Exercise 1: guessing game

let magicNumber = 6;

let guessMagicNumber = prompt("what's the magic number?")

if (guessMagicNumber > magicNumber) {
  console.log("too high!");
} else if (guessMagicNumber < magicNumber) {
  console.log("too low!");
} else {
  console.log("congratulations!!")
}


// Exercise 2: seasons

let birthMonth = prompt("what month were you born?")

switch (birthMonth) {
  case "December":
  case "January":
  case "February":
  case "March":
    console.log("a Winter baby!")
    break;
  case "April":
  case "May":
    console.log("a Spring baby!")
    break;
  case "June":
  case "July":
  case "August":
    console.log("a Summer baby!");
    break;
  case "September":
  case "October":
  case "November":
    console.log("a Fall baby!")
  default:
    console.log("that's not a month, or maybe try capitalizing it")
    break;
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank Top"
    break;
  case "02":
    type = "T-Shirt"
    break;
  case "03":
    type = "Long Sleeve"
    break;
  case "04":
    type = "Sweat Shirt"
    break;
  default:
    type = "Other"
    break;
}

switch (colorId) {
  case "BK":
    color = "Black"
    break;
  case "BL":
    color = "Blue"
    break;
  case "RD":
    color = "Red"
    break; 
  case "PU":
    color = "Purple"
    break;
}

switch (sizeId) {
  case "S":
    size = "Small"
    break;
  case "M":
    size = "Medium"
    break;
  case "L":
    size = "Large"
    break;
  case "XL":
    size = "Extra Large"
    break;
  default:
    size = "One Size Fits All"
  }

console.log(`Product: ${size} ${color} ${type}`);