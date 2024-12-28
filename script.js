const toggleArrow = document.getElementById('toggleArrow');
const windowContent = document.getElementById('windowContent');

toggleArrow.addEventListener('click', () => {
  if (windowContent.style.display === 'block') {
    windowContent.style.display = 'none';
    toggleArrow.textContent = '→';
  } else {
    windowContent.style.display = 'block';
    toggleArrow.textContent = '←';
  }
});

