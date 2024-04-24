import data from '../../public/data/DATA.json';
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
	updateStyle() {
		this._style.textContent = `
        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin: 20px;
        }`;
	}
	render() {
		this.updateStyle();

		console.log(data);
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
