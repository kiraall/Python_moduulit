const numRolls = parseInt(prompt("How many dice would you like to roll?"));

if (isNaN(numRolls) || numRolls <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    let sum = 0;
    let rolls = [];

    for (let i = 0; i < numRolls; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
        sum += roll;
    }

    console.log(`Rolls: ${rolls.join(', ')}`);
    console.log(`Sum: ${sum}`);
}