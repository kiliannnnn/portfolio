const openButton = document.getElementById('open-popup');
const closeButton = document.getElementById('close-popup');
const popupContainer = document.getElementById('popup-container');

// Open popup when button is clicked
openButton.addEventListener('click', () => {
  popupContainer.classList.add('open');
});

// Close popup when close button is clicked
closeButton.addEventListener('click', () => {
  popupContainer.classList.remove('open');
});