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
      square.style.backgroundColor = getRandomColor();
      let currentOpacity = parseFloat(square.style.opacity) || 0;
      currentOpacity = Math.min(currentOpacity + 0.1, 1);
      square.style.opacity = currentOpacity;
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", () => {
  generateGrid();
})

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateGrid();