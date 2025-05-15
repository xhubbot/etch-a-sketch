const container = document.querySelector('.container');
const button = document.querySelector('button');

function generateGrid() {
  const size = parseInt(document.getElementById('gridSize').value);
  const squareSize = 100 / size;
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;

    square.addEventListener('mouseenter', () => {
      square.classList.add('hovered');
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", () => {
  generateGrid();
})

generateGrid();