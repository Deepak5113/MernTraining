const button = document.getElementById('changeColorButton');
const body = document.body;
const container = document.querySelector('.container');

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

button.addEventListener('click', () => {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
});

// Add fade-in effect on page load
window.onload = () => {
  container.classList.add('fade-in');
  body.style.opacity = 1;
};
