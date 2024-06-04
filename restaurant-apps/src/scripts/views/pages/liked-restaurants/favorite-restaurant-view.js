import { createrestaurantsItemTemplate } from '../../templates/template-creator-restaurant';

class FavoriteRestaurantView {
  static getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Your Liked Restaurant</h2>
  
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  }

  static runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurantRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createrestaurantsItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  static _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        Tidak ada film untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestaurantView;
