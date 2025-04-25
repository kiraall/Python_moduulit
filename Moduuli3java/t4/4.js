const students = [
  { id: "2345768", name: "John" },
  { id: "2134657", name: "Paul" },
  { id: "5423679", name: "Jones" }
];

const target = document.getElementById("target");
target.innerHTML = "";

students.forEach(student => {
  const option = document.createElement("option");
  option.value = student.id;
  option.textContent = student.name;
  target.appendChild(option);
});