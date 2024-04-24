class RestaurantItem extends HTMLElement {
	constructor() {
		super();
		this._restaurant = {
			id: 0,
			name: 'harus ada',
			description: 'harus ada',
			pictureId: 'harus ada',
			city: 'harus ada',
			rating: 'harus ada',
		};

		this._style = document.createElement('style');
	}
	setRestaurant(value) {
		this._restaurant['id'] = value.id;
		this._restaurant['name'] = value.name;
		this._restaurant['description'] = value.description;
		this._restaurant['pictureId'] = value.pictureId;
		this._restaurant['city'] = value.city;
		this._restaurant['rating'] = value.rating;

		this.render();
	}
	connectedCallback() {
		this.render();
	}
	updateStyle() {
		this._style.textContent = `
        .card {
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            width: 300px; /* Sesuaikan lebar sesuai kebutuhan */
            text-align: center;
        }
        
        /* Gaya header kartu */
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .card-city {
            font-weight: bold;
        }
        
        .card-rating {
            color: #f9a825; /* Warna kuning untuk rating */
        }
        
        /* Gaya body kartu */
        .card-body {
            padding: 15px;
        }
        .card-body img {
            width:100%;
        }

        .card-body h3 {
            margin-top: 0;
            margin-bottom: 10px;
            font-size: 18px;
        }
        
        .card-body p {
            line-height: 1.6;
        }

		`;
	}

	render() {
		this.updateStyle();

		this.innerHTML = `
        ${this._style.outerHTML}

		<div class="card-container">
				<div class="card">
					<div class="card-header">
						<div class="card-city">${this._restaurant.city}</div>
						<div class="card-rating">${this._restaurant.rating}</div>
					</div>
					<div class="card-body">
                    <img class="card-picture" src="${this._restaurant.pictureId}" alt="">
						<h3>${this._restaurant.name}</h3>
						<p>${this._restaurant.description}</p>
					</div>
				</div>
			</div>`;
	}
}
customElements.define('restaurant-item', RestaurantItem);
