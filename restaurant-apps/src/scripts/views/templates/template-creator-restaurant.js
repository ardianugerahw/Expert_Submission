import CONFIG from '../../globals/config';

const createrestaurantsDetailTemplate = (restaurant) => `
<h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_URL}/images/large/${restaurant.pictureId}" alt="${restaurant.title}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus?.foods?.name || 'Menu minuman tidak tersedia'}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.name}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.customerReviews}</p>
  </div>
`;
// name, ,pictureId, address, city, description, menus.foods, menus.drinks, customerReviews
const createrestaurantsItemTemplate = (restaurants) => `
// div`;
export { createrestaurantsItemTemplate, createrestaurantsDetailTemplate };
// <div class="card-item">
// <div class="card-header">
//     <div class="card-city"><a tabindex="0" href="#">Kota ${restaurant.city}</a></div>
//     <div class="card-rating"><a tabindex="0" href="#"> ${restaurant.rating}</a></div>
// </div>
// <div class="card-body">
//     <img class="card-picture" src="${restaurant.pictureId}" alt="Gambar Restaurant">
//     <h3>
//         <a tabindex="0" href="#">${restaurant.name}</a>
//     </h3>
//     <p>
//         <a tabindex="0" href="#">${restaurant.description}</a>
//     </p>
// </div>
// </div>
