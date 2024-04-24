import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import data from '../public/data/DATA.json' assert { type: 'json' };
import './components/restaurant-list.js';
import './components/main.js';
import './components/lempar-lah.js';
import './components/restaurant-item.js';

const menuBtn = document.getElementById('menu');
const drawer = document.getElementById('drawer');

menuBtn.addEventListener('click', function () {
	drawer.classList.toggle('active');
});

const restoranList = document.querySelector('restaurant-list');

restoranList.setRestaurantList(data.restaurants);

// for (let res of data.restaurants) {
// 	restoran.this._ArrayRestaurant.push(setRestaurant(res));
// }

// const restoran = data.restaurants;
// restoran.push(setRestaurant());

// fetch('../public/data/DATA.json')
// 	.then((response) => response.json())
// 	.then((data) => {
// 		// Mengubah respons JSON menjadi objek JavaScript menggunakan JSON.parse
// 		const parsedData = JSON.parse(JSON.stringify(data));

// 		// Menampilkan informasi restoran pada halaman
// 		const restaurant = parsedData.restaurants[0];
// 		const restaurantInfo = `
//                     <h2>${restaurant.name}</h2>
//                     <p>Description: ${restaurant.description}</p>
//                     <p>City: ${restaurant.city}</p>
//                     <p>Rating: ${restaurant.rating}</p>
//                     <img src="${restaurant.pictureId}" alt="Restaurant Image" style="width: 300px;">
//                 `;
// 		document.getElementById('restaurant-info').innerHTML = restaurantInfo;
// 	})
// 	.catch((error) => {
// 		// Menangani kesalahan jika ada
// 		console.error('Terjadi kesalahan:', error);
// 	});
