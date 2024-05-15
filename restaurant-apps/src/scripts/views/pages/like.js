import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createrestaurantsItemTemplate } from '../templates/template-creator-restaurant';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant Favorite</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createrestaurantsItemTemplate(restaurant);
    });
  },
};

export default Like;
