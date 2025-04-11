let nimen_numero= Math.floor(Math.random() * 4) + 1;
let nimet;
let inputti = prompt("Kuka sä olet: ");
switch (nimen_numero) {
    case 1:
        nimet = "Gryffindor";
        break;
    case 2:
        nimet = 'Slytherin';
        break;
    case 3:
        nimet = 'Hufflepuff';
        break;
    case 4:
        nimet = "Ravenclaw";
        break

}

document.body.innerHTML = `${inputti}, you are ${nimet}`;
console.log(`${inputti} , you are ${nimet}`)