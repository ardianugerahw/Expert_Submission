// import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';

const ApiPage = {
  async render() {
    return `
        <h2>Api Page</h2>
      `;
  },

  async afterRender() {
    // const restaurants = await RestaurantDicodingSource.apiPageRestaurants();
    // console.log(restaurants);
  },
};

export default ApiPage;
