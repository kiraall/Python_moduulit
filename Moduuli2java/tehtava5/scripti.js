const numbers = new Set(); // Using Set to easily check for duplicates

while (true) {
  const input = prompt("Enter a number (or a duplicate to stop):");
  const number = parseFloat(input);

  if (isNaN(number)) {
    alert("Please enter a valid number.");
    continue;
  }

  if (numbers.has(number)) {
    alert(`Number ${number} has already been given.`);
    break;
  }

  numbers.add(number);
}

const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

console.log("Numbers in ascending order:");
sortedNumbers.forEach(num => console.log(num));