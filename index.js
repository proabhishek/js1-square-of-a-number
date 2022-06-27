// Getting input via STDIN
const readline = require("readline");

const code = readline.createInterface({
  input: process.stdin
});

const userInput = [];

code.on("line", (data) => {
  userInput.push(data);
});

// neglect code above it
code.on("close", () => {
  
   let input = userInput
   let n = parseInt(input[0])
   
   
    
});
