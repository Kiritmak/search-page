let id = 2;
const search_size = document.querySelectorAll(
  "main > section:last-child button"
).length;

function updateSelectedButton(buttonSelected) {
  buttonSelected.classList.add("seleced-button");
  console.log(buttonSelected);
  document
    .querySelectorAll("main > section:last-child button")
    .forEach((other) => {
      if (other === buttonSelected) return;
      other.classList.remove("seleced-button");
    });
}

document
  .querySelectorAll("main > section:last-child button")
  .forEach((node) => {
    node.addEventListener("click", (Event) => {
      const actual_button = Event.target;
      if (node.innerHTML.length < 5) updateSelectedButton(actual_button);
    });
  });

document.querySelector(".retroceder").addEventListener("click", () => {
  id--;
  if (id < 2) id = search_size - 1;
  node = document.querySelector(
    `main > section:last-child button:nth-child(${id})`
  );
  updateSelectedButton(node);
});

document.querySelector(".avanzar").addEventListener("click", () => {
  id++;
  if (id >= search_size) id = 2;
  node = document.querySelector(
    `main > section:last-child button:nth-child(${id})`
  );
  updateSelectedButton(node);
});