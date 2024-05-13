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
    this._restaurant.id = value.id;
    this._restaurant.name = value.name;
    this._restaurant.description = value.description;
    this._restaurant.pictureId = value.pictureId;
    this._restaurant.city = value.city;
    this._restaurant.rating = value.rating;

    // Melakukan validasi panjang deskripsi
    if (value.description.length > 200) {
      this._restaurant.description = `${value.description.substring(0, 200)}...`; // Memotong deskripsi jika terlalu panjang
    } else {
      this._restaurant.description = value.description; // Menggunakan deskripsi asli jika tidak terlalu panjang
    }

    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        
		.card-item {
			border: 1px solid black;
			border-radius: 8px;
			padding: 16px;

			flex-basis: 15%;

			transition: all 150ms ease-in;

            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            text-align: center;
        }
        
        
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
		.card-city a{
            text-decoration: none;
			color: #616161;
			align-content:center;
			
			
        }
        
        .card-rating a{
			text-decoration: none;
            color: #f9a825; 
			align-content:center;
        }
        
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
		.card-body h3 a  {
            
			text-decoration: none;
			color: #616161;
			align-content:center;
        }
        
        .card-body p {
            line-height: 1.6;
        }
		div.card-body p a{
			color: #616161;
			text-decoration: none;
		}
		`;
  }

  render() {
    this.updateStyle();

    this.innerHTML = `
        ${this._style.outerHTML}

		
				<div class="card-item">
					<div class="card-header">
						<div class="card-city"><a tabindex="0" href="#">Kota ${this._restaurant.city}</a></div>
						<div class="card-rating"><a tabindex="0" href="#"> ${this._restaurant.rating}</a></div>
					</div>
					<div class="card-body">
						<img class="card-picture" src="${this._restaurant.pictureId}" alt="Gambar Restaurant">
						<h3>
							<a tabindex="0" href="#">${this._restaurant.name}</a>
						</h3>
						<p>
							<a tabindex="0" href="#">${this._restaurant.description}</a>
						</p>
					</div>
				</div>
			`;
  }
}
customElements.define('restaurant-item', RestaurantItem);
