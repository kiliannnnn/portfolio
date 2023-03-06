// find popup
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
});

const openButtonJs = document.getElementById('open-popup-js');
openButtonJs.addEventListener('click', () => {
  popupContainerJs.classList.add('open');
});

const openButtonPhp = document.getElementById('open-popup-php');
openButtonPhp.addEventListener('click', () => {
  popupContainerPhp.classList.add('open');
});

const openButtonMysql = document.getElementById('open-popup-mysql');
openButtonMysql.addEventListener('click', () => {
  popupContainerMysql.classList.add('open');
});

const openButtonDrupal = document.getElementById('open-popup-drupal');
openButtonDrupal.addEventListener('click', () => {
  popupContainerDrupal.classList.add('open');
});

const openButtonDocker = document.getElementById('open-popup-docker');
openButtonDocker.addEventListener('click', () => {
  popupContainerDocker.classList.add('open');
});

// Close popup
const closeButton = document.querySelectorAll('.popup-blur');

closeButton[0].addEventListener('click', () => {
  popupContainerComposer.classList.remove('open');
});
closeButton[1].addEventListener('click', () => {
  popupContainerScss.classList.remove('open');
});
closeButton[2].addEventListener('click', () => {
  popupContainerJs.classList.remove('open');
});
closeButton[3].addEventListener('click', () => {
  popupContainerPhp.classList.remove('open');
});
closeButton[4].addEventListener('click', () => {
  popupContainerMysql.classList.remove('open');
});
closeButton[5].addEventListener('click', () => {
  popupContainerDrupal.classList.remove('open'); 
});
closeButton[6].addEventListener('click', () => {
  popupContainerDocker.classList.remove('open');
});







//rebuild

const nav_links = document.querySelectorAll('.nav-link');

$('.menu-toggle').click(function() {
  $('.menu-bg').toggle('show')
  nav_links.forEach((link) => {
    link.classList.toggle('show');
  });
});