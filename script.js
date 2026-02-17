const parentContainer = document.querySelector("#parent-container");
const container = document.querySelector("#grid-container");
const pixelBtn = document.querySelector("#pixel-btn");
const colorPicker = document.querySelector("#color-picker");

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
    square.tabIndex = 0;
    square.addEventListener('mouseleave', () => {
        square.style.background = colorPicker.value;
        console.log(square.key)
    })
    container.appendChild(square);
  }
};
pixelBtn.addEventListener("input", () => {
   const pixel = Number(pixelBtn.value);
   createGrid(pixel);
});

document.addEventListener("keydown", (e) => {
  console.log(e.key)
})