const parentContainer = document.querySelector("#parent-container");
const container = document.querySelector("#grid-container");
const pixelBtn = document.querySelector("#pixel-btn");
const colorPicker = document.querySelector("#color-picker");
const eraser = document.querySelector("#eraser");


createGrid(100);
draw();

function createGrid(size) {
  if (size < 1 || size > 130 || !Number.isInteger(size)) {
     container.innerHTML = '';
     const para = document.createElement('h3');
     para.textContent = "Pixel should not be less than 0 or greater than 130.";
     container.appendChild(para)
    return;
  }

  container.innerHTML = ' ';
  document.documentElement.style.setProperty("--p", size);
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');

   /* square.addEventListener('mouseover', (e) => {
        square.style.background = colorPicker.value;
    }); */
    container.appendChild(square);
  }
};

function draw() {
  let squares = document.querySelectorAll(".grid-square");
  let size = Math.sqrt(squares.length);
  let row = Math.floor(size / 2)
  let col = Math.floor(size / 2);
  let currentIndex = row * size + col;
  squares[currentIndex].style.background = colorPicker.value;

  container.tabIndex = 0;
  container.focus();

  container.removeEventListener("keydown", handleKeydown);
  container.addEventListener("keydown", handleKeydown)
  function handleKeydown(e) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }
   // const squares = document.querySelectorAll('.grid-square');
    let nextIndex = currentIndex;
   // let gridSize = Math.sqrt(squares.length);

    switch (e.key) {
      case 'ArrowUp': nextIndex = currentIndex - size; break;
      case 'ArrowDown': nextIndex = currentIndex + size; break;
      case 'ArrowLeft': nextIndex = currentIndex - 1; break;
      case 'ArrowRight': nextIndex = currentIndex +1; break;
    }
    if (nextIndex >= 0 && nextIndex < squares.length) {
      currentIndex = nextIndex;
      squares[currentIndex].style.background = colorPicker.value;
    }
  };
};

let pixel = 100;
//to get the pixel value/number/size
pixelBtn.addEventListener("change", () => {
   pixel = Number(pixelBtn.value);
   createGrid(pixel);
   draw();
});
eraser.addEventListener("click", () => {
    createGrid(pixel || 100);
    draw();
});