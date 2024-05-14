import CONFIG from '../../globals/config';

const createrestaurantsDetailTemplate = (restaurant) => `
<div class="detail-container">
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
  </div>
  <div class="restaurant__menu">
    <h4>Menu Makanan</h4>
    ${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
    <br>
    <h4>Menu Minuman</h4>
    ${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
  </div>
  <div class="restaurant__overview">
    ${restaurant.customerReviews.reduce((show, value) => show.concat(`

    <div class="review__container"> 
      <p>${value.name}</p>
      <p>${value.review}</p>
      <p>${value.date}</p>
    </div>

        `), '<h4>Customer Reviews:</h4>')}
  </div>
</div>
`;
// name, ,pictureId, address, city, description, menus.foods, menus.drinks, customerReviews
const createrestaurantsItemTemplate = (restaurants) => restaurants;
export { createrestaurantsItemTemplate, createrestaurantsDetailTemplate };
