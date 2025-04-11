 // Function to check if a year is a leap year
        function isLeapYear(year) {
            if (year % 4 !== 0) {
                return false;
            } else if (year % 100 !== 0) {
                return true;
            } else if (year % 400 !== 0) {
                return false;
            } else {
                return true;
            }
        }

        const startYear = parseInt(prompt("Enter the start year:"));
        const endYear = parseInt(prompt("Enter the end year:"));

        if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
            document.getElementById('result').innerHTML =
                "Please enter valid start and end years (start year should be less than or equal to end year).";
        } else {
            const leapYears = [];
            for (let year = startYear; year <= endYear; year++) {
                if (isLeapYear(year)) {
                    leapYears.push(year);
                }
            }

            let html = "<ul>";
            if (leapYears.length === 0) {
                html += "<li>No leap years found in this range</li>";
            } else {
                leapYears.forEach(year => {
                    html += `<li>${year}</li>`;
                });
            }
            html += "</ul>";

            document.getElementById('result').innerHTML = html;
        }