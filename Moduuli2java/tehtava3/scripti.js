const dogNames = [];

        for (let i = 0; i < 6; i++) {
            let name;
            do {
                name = prompt(`Enter name for dog ${i + 1} of 6:`);
                if (!name || name.trim() === "") {
                    alert("Please enter a valid name.");
                }
            }
            while (!name || name.trim() === "");

            dogNames.push(name.trim());
        }

        dogNames.sort((a, b) => b.localeCompare(a, undefined, {sensitivity: 'base'}));

        const dogList = document.getElementById('dogList');
        dogNames.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            dogList.appendChild(li);
        });
