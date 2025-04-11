const numbers = [];

while (true) {
  const input = prompt("Enter a number (enter 0 to stop):");
  const number = parseFloat(input);

  if (isNaN(number)) {
    console.log(`"${input}" is not a valid number. Please try again.`);
    continue;
  }

  if (number === 0) {
    break;
  }

  numbers.push(number);
}

numbers.sort((a, b) => b - a);

console.log("Numbers from largest to smallest:");
numbers.forEach(num => console.log(num));