import data from '../../public/data/DATA.json';
class LemparLah extends HTMLElement {
	constructor() {
		super();
		this._style = document.createElement('style');
	}
	connectedCallback() {
		this.render();
	}
	updateStyle() {
		this._style.textContent = ``;
	}
	render() {
		this.updateStyle();
		console.log(data);
		this.innerHTML = `
        ${this._style.outerHTML}
        <div class="not-item-container">
			<div class="note__detail">
				<h6>ID: </h6>
				<h6>created </h6>
			</div>
			<div class="note__archived">
				<h4>Archived:<span> </span></h4>
			</div>

			<h5 class="note__title">
				
			</h5>
			<div class="note__description">
				<p></p>
			</div>

			<div>
			<button class="BtnDelete" id="" type="button" >Del</button>
			</div>
			
		</div>`;
	}
}
customElements.define('lempar-lah', LemparLah);
