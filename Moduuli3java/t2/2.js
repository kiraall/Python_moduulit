const target = document.getElementById("target");
const items = ["First item", "Second item", "Third item"];

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  target.appendChild(li);
});