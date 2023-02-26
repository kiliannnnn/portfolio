const openButton = document.getElementById('open-popup');
const closeButton = document.getElementById('close-popup');
const popupContainer = document.getElementById('popup-container');
const body = document.querySelector('body');

// Open popup when button is clicked
openButton.addEventListener('click', () => {
  popupContainer.classList.add('open');
  body.classList.add('blur');
});

// Close popup when close button is clicked
closeButton.addEventListener('click', () => {
  popupContainer.classList.remove('open');
  body.classList.remove('blur');
});

// Close popup when user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    popupContainer.classList.remove('open');
    body.classList.remove('blur');
  }
});
