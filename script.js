const parentContainer = document.querySelector("#parent-container");
const container = document.querySelector("#grid-container");
const pixelBtn = document.querySelector("#pixel-btn");
const colorPicker = document.querySelector("#color-picker");
const eraser = document.querySelector("#eraser");


createGrid(36);
  draw();

function createGrid(size) {
  if (size > 100 || size < 0 || !Number.isInteger(size)) {
     container.innerHTML = ' ';
     const para = document.createElement('h1');
     para.textContent = "Pixel should not be less than 0 or greater than 100.";
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
  let currentIndex = Math.floor(squares.length / 2);
  squares[currentIndex].style.background = colorPicker.value;

  container.tabIndex = 0;
  container.focus();

  container.addEventListener("keydown", (e) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }

    const squares = document.querySelectorAll('.grid-square');
    let nextIndex = currentIndex;

    switch (e.key) {
      case 'ArrowUp': nextIndex = currentIndex - pixel; break;
      case 'ArrowDown': nextIndex = currentIndex + pixel; break;
      case 'ArrowLeft': nextIndex = currentIndex - 1; break;
      case 'ArrowRight': nextIndex = currentIndex +1; break;
    }

    if (nextIndex >= 0 && nextIndex < squares.length) {
      currentIndex = nextIndex;
      squares[currentIndex].style.background = colorPicker.value;
    }
  });
};
let pixel = 36;
//to get the pixel value/number/size
pixelBtn.addEventListener("change", () => {
   pixel = Number(pixelBtn.value);
   createGrid(pixel);
   draw();
});
eraser.addEventListener("click", () => {
    createGrid(pixel || 36);
    draw();
});