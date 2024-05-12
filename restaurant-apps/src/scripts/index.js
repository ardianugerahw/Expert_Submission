import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';

import data from '../public/data/DATA.json';
import './components/restaurant-list';
import './components/restaurant-item';
import App from './views/app';

const restoranList = document.querySelector('restaurant-list');
restoranList.setRestaurantList(data.restaurants);

// const menu = document.querySelector('.header__menu');
// const drawer = document.querySelector('.nav');
// const mainElement = document.querySelector('main');
// const hero = document.querySelector('.hero');
// const header = document.querySelector('.header');

const app = new App({
  button: document.querySelector('.header__menu'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('main'),
});

// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// mainElement.addEventListener('click', (event) => {
//   drawer.classList.remove('open');
//   event.stopPropagation();
// });
// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });
// header.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
