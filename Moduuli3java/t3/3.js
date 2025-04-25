const names = ["John", "Paul", "Jones"];
document.getElementById("target").innerHTML = names.map(name => `<li>${name}</li>`).join("");