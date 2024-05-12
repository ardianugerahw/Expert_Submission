class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._ArrayRestaurant = [];
    this._style = document.createElement('style');
  }

  setRestaurantList(value) {
    this._ArrayRestaurant = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  updateStyle() {
    console.log('ini update style masih belum terurus');
  }

  render() {
    this.updateStyle();

    const restauranItemMap = this._ArrayRestaurant.map((data) => {
      const MapResto = document.createElement('restaurant-item');
      if ('setRestaurant' in MapResto) {
        MapResto.setRestaurant(data);
      } else {
        console.error('Error: restaurant-item tidak punya setRestaurant method.');
      }
      return MapResto;
    });

    this.innerHTML = '';
    this.append(this._style, ...restauranItemMap);
  }
}
customElements.define('restaurant-list', RestaurantList);
