const numbers = [];
let count = 0;

while (count < 5) {
    const input = prompt(`Enter number ${count + 1} of 5:`);
    const number = parseFloat(input);

    if (!isNaN(number)) {
        numbers.push(number);
        count++;
    } else {
        alert(`"${input}" is not a valid number. Please try again.`);
    }
}

console.log("Original order:", numbers.join(', '));
console.log("Reversed order:");

// Print in reverse without array.reverse()
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}