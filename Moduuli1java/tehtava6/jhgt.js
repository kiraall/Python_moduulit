    const resultElement = document.getElementById('taaonid');

    const shouldCalculate = confirm("Should I calculate the square root?");

    if (shouldCalculate) {
        const number = prompt("Enter the number:");
        const num = parseFloat(number);

        if (isNaN(num)) {
            resultElement.textContent = "Invalid input. Please enter a valid number.";
        }
        else if (num < 0) {
            resultElement.textContent = "The square root of a negative number is not defined";
        }
        else {
            const squareRoot = Math.sqrt(num);
            resultElement.textContent = `The square root of ${num} is ${squareRoot}`;
        }
    } else {

        resultElement.textContent = "The square root is not calculated.";
    }