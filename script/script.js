// Each popup
const popupContainerComposer = document.getElementById('popup-container-composer');
const popupContainerScss = document.getElementById('popup-container-scss');
const popupContainerJs = document.getElementById('popup-container-js');
const popupContainerPhp = document.getElementById('popup-container-php');
const popupContainerMysql = document.getElementById('popup-container-mysql');
const popupContainerGit = document.getElementById('popup-container-git');
const popupContainerDrupal = document.getElementById('popup-container-drupal');
const popupContainerDocker = document.getElementById('popup-container-docker');
var popupContainer = document.querySelectorAll('div.popup-container');
var isPopupOpen = false;

// Open popup
const openButtonComposer = document.getElementById('open-popup-composer');
openButtonComposer.addEventListener('click', () => {
  popupContainerComposer.classList.add('open');
  isPopupOpen = true;
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

/* Close popup
const closeButton = document.getElementsByClassName('close-popup');
closeButton.addEventListener('click', () => {
  popupContainer.forEach((popup) => {
    popup.classList.add('open');
    popup.classList.remove('open');
  });
});*/

document.addEventListener('click', () => {
  if (isPopupOpen) {
      popupContainer.forEach((popup) => {
      popup.classList.remove('open');
    });
    isPopupOpen = false;
  }
});