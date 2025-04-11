
        function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }


        const rollResults = document.getElementById('rollResults');
        let currentRoll;

        do {
            currentRoll = rollDice();
            const listItem = document.createElement('li');
            listItem.textContent = `Rolled: ${currentRoll}`;
            rollResults.appendChild(listItem);
        } while (currentRoll !== 6);