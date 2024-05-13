import UrlParser from '../../routes/url-parser';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import { createrestaurantsDetailTemplate } from '../templates/template-creator-restaurant';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDicodingSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createrestaurantsDetailTemplate(restaurant);
  },
};

export default Detail;
