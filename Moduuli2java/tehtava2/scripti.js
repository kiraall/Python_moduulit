
const numParticipants = parseInt(prompt("How many participants?"));


if (isNaN(numParticipants)) {
            document.getElementById('participantList').textContent =
                "Please enter a valid number.";
} else {
    const participants = [];


    for (let i = 0; i < numParticipants; i++) {
        const name = prompt(`Enter name for participant ${i + 1}:`);
        if (name && name.trim() !== "") {
                    participants.push(name.trim());
        } else {
            i--;
                    alert("Please enter a valid name.");
        }
    }

    participants.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

    let html = "<ol>";
    participants.forEach(participant => {
        html += `<li>${participant}</li>`;
    });
    html += "</ol>";

    document.getElementById('participantList').innerHTML = html;
}