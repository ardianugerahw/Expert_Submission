import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';

import data from '../public/data/DATA.json' assert { type: 'json' };
import './components/restaurant-list.js';
import './components/restaurant-item.js';

const restoranList = document.querySelector('restaurant-list');
restoranList.setRestaurantList(data.restaurants);

const menu = document.querySelector('.header__menu');
const drawer = document.querySelector('.nav');
const mainElement = document.querySelector('main');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

menu.addEventListener('click', function (event) {
	drawer.classList.toggle('open');
	event.stopPropagation();
});

mainElement.addEventListener('click', function (event) {
	drawer.classList.remove('open');
	event.stopPropagation();
});
hero.addEventListener('click', function () {
	drawer.classList.remove('open');
});
header.addEventListener('click', function () {
	drawer.classList.remove('open');
});
// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// menu.addEventListener('click', function (event) {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', function () {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', function () {
//   drawer.classList.remove('open');
// });
