const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));
const num3 = parseInt(prompt("Enter the third integer:"));
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;
const resultsDiv = document.getElementById('results');
resultsDiv.innerHTML = `
    <p>Sum: ${sum}</p>
    <p>Product: ${product}</p>
    <p>Average: ${average.toFixed(2)}</p>
`;