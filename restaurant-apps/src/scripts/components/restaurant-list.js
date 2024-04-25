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
	updateStyle() {}
	render() {
		this.updateStyle();

		const restauranItemMap = this._ArrayRestaurant.map((data) => {
			const woy = document.createElement('restaurant-item');
			if ('setRestaurant' in woy) {
				woy.setRestaurant(data);
			} else {
				console.error("Error: restaurant-item doesn't have a setRestaurant method.");
			}
			return woy;
		});

		this.innerHTML = '';
		this.append(this._style, ...restauranItemMap);
	}
}
customElements.define('restaurant-list', RestaurantList);
