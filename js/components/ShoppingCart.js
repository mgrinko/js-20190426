import {getAll} from "../api/phone.js";

export default class ShoppingCart {
	state;
	constructor(element, props) {
		this.element = element;
		this.props = props;

		this.state = {
			//currentName: this.props.phone.name,
		};

		this.render();


	}

	render() {

		const { phone } = this.props;

		this.element.innerHTML = `
			<section>
				<p>Shopping Cart</p>
				<p data-cart="empty">Корзина пуста</p>
				<ul
					data-element="basket-list"
				>
					
				</ul>
			</section>
		`;
	}
}