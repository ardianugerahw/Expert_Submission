import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';

import './components/restaurant-list';
import './components/restaurant-item';
import App from './views/app';
import RestaurantDicodingSource from './data/restaurant-dicoding-source';
import swRegister from './utils/sw-register';

async function fetchPageRestaurants() {
  try {
    const dataOnline = await RestaurantDicodingSource.apiPageRestaurants();
    console.log(dataOnline); // Log fetched restaurants

    const restoranList = document.querySelector('restaurant-list');
    restoranList?.setRestaurantList(dataOnline);
  } catch (error) {
    console.error('Error fetching page restaurants:', error);
  }
}
fetchPageRestaurants();

// fetchPageRestaurants().then((combinedData) => {
//   restoranList.setRestaurantList(combinedData);
// });

// const restoranList = document.querySelector('restaurant-list');
// restoranList.setRestaurantList(dataLokal);

const app = new App({
  button: document.querySelector('.header__menu'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
