  function rollDice(sides) {
            return Math.floor(Math.random() * sides) + 1;
        }

        // Main program
        const sides = parseInt(prompt("How many sides does your dice have?"));

        // Validate input
        if (isNaN(sides) || sides < 2) {
            document.getElementById('diceInfo').textContent =
                "Please enter a valid number of sides (at least 2).";
        } else {
            document.getElementById('diceInfo').textContent =
                `Rolling a ${sides}-sided dice until we get ${sides}...`;

            const rollResults = document.getElementById('rollResults');
            let currentRoll;
            let rollCount = 0;

            do {
                currentRoll = rollDice(sides);
                rollCount++;
                const listItem = document.createElement('li');
                listItem.textContent = `Roll ${rollCount}: ${currentRoll}`;
                rollResults.appendChild(listItem);
            } while (currentRoll !== sides);

            // Add summary
            const summary = document.createElement('li');
            summary.textContent = `Got ${sides} after ${rollCount} rolls!`;
            summary.style.fontWeight = 'bold';
            rollResults.appendChild(summary);
        }