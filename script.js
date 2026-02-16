const container = document.querySelector("#grid-container");

function createGrid(size) {
  if (size > 100) {
   const para = document.createElement('h1');
     para.textContent = "Reduce to 100 pixels or less";
     container.appendChild(para)
     console.log("too many pixel");
    return;
  }
  document.documentElement.style.setProperty("--p", size);
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
  }
}
createGrid(5);