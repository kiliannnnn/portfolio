// Each popup
const popupContainerComposer = document.getElementById('popup-container-composer');
const popupContainerScss = document.getElementById('popup-container-scss');
const popupContainerJs = document.getElementById('popup-container-js');
const popupContainerPhp = document.getElementById('popup-container-php');
const popupContainerMysql = document.getElementById('popup-container-mysql');
const popupContainerGit = document.getElementById('popup-container-git');
const popupContainerDrupal = document.getElementById('popup-container-drupal');
const popupContainerDocker = document.getElementById('popup-container-docker');

// Open popup
const openButtonComposer = document.getElementById('open-popup-composer');
openButtonComposer.addEventListener('click', () => {
  popupContainerComposer.classList.add('open');
});

const openButtonScss = document.getElementById('open-popup-scss');
openButtonScss.addEventListener('click', () => {
  popupContainerScss.classList.add('open');
  isPopupOpen = true;
});

const openButtonJs = document.getElementById('open-popup-js');
openButtonJs.addEventListener('click', () => {
  popupContainerJs.classList.add('open');
  isPopupOpen = true;
});

const openButtonPhp = document.getElementById('open-popup-php');
openButtonPhp.addEventListener('click', () => {
  popupContainerPhp.classList.add('open');
  isPopupOpen = true;
});

const openButtonMysql = document.getElementById('open-popup-mysql');
openButtonMysql.addEventListener('click', () => {
  popupContainerMysql.classList.add('open');
  isPopupOpen = true;
});

const openButtonGit = document.getElementById('open-popup-git');
openButtonGit.addEventListener('click', () => {
  popupContainerGit.classList.add('open');
  isPopupOpen = true;
});

const openButtonDrupal = document.getElementById('open-popup-drupal');
openButtonDrupal.addEventListener('click', () => {
  popupContainerDrupal.classList.add('open');
  isPopupOpen = true;
});

const openButtonDocker = document.getElementById('open-popup-docker');
openButtonDocker.addEventListener('click', () => {
  popupContainerDocker.classList.add('open');
  isPopupOpen = true;
});

// Close popup
const closeButton = document.getElementById('close-popup');
closeButton.addEventListener('click', () => {
  popupContainerComposer.classList.remove('open');
  popupContainerScss.classList.remove('open');
  popupContainerJs.classList.remove('open');
  popupContainerPhp.classList.remove('open');
  popupContainerMysql.classList.remove('open');
  popupContainerGit.classList.remove('open');
  popupContainerDrupal.classList.remove('open');
  popupContainerDocker.classList.remove('open');
});

/*document.addEventListener('click', () => {
  if (isPopupOpen) {
      popupContainer.forEach((popup) => {
      popup.classList.remove('open');
    });
    isPopupOpen = false;
  }
});*/

const shapes = document.querySelectorAll('.shape');
const container = document.querySelector('.body-container');

shapes.forEach((shape) => {
  const randomX = Math.floor(Math.random() * 100);
  const randomY = Math.floor(Math.random() * 250);
  shape.style.left = `${randomX}%`;
  shape.style.top = `${randomY}%`;
});

container.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  shapes.forEach((shape) => {
    const speed = shape.getAttribute('data-speed');
    const xMove = (x * speed) / 100;
    const yMove = (y * speed) / 100;
    shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
  });
});