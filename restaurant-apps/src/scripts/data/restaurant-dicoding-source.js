import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDicodingSource {
  static async apiPageRestaurants() {
    const response = await fetch(API_ENDPOINT.API_PAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurants(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async imageSmallRestaurants(pictureId) {
    const response = await fetch(API_ENDPOINT.IMAGE_SMALL(pictureId));
    const responseJson = await response.json();
    return responseJson();
  }

  static async imageMediumRestaurants(pictureId) {
    const response = await fetch(API_ENDPOINT.IMAGE_MEDIUM(pictureId));
    const responseJson = await response.json();
    return responseJson();
  }

  static async imageLargeRestaurants(pictureId) {
    const response = await fetch(API_ENDPOINT.IMAGE_LARGE(pictureId));
    const responseJson = await response.json();
    return responseJson();
  }
}

export default RestaurantDicodingSource;
