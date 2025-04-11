// 1. Haetaan lista ja tallennetaan muuttujaan
const targetElement = document.getElementById('target');

// 2. Lisätään sisältö
targetElement.classList.add ('my-list')
targetElement.innerHTML = `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
`;

// 3. Muokataan vielä tyylejä (esimerkki)
targetElement.style.backgroundColor = "lightyellow";

