export default class ShoppingCart {
	state;
	constructor(element, props) {
		this.element = element;
		this.props = props;

		this.render();

		this.element.addEventListener('click', (event) => {
			const removeFromCart = event.target.closest('shoppingcart button');

			if (!removeFromCart) {
				return;
			}

			const removedElem = removeFromCart.dataset.count;
			this.props.onItemRemoved(removedElem);
		});


	}

	render() {

		this.element.innerHTML = `
			${this.props.basketItems.map( (item, i) => `
				<li>${item}<button data-count="${i}">x</button></li>
			`).join('')}
		`;
	}
}