import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import ShoppingCart from './ShoppingCart.js';
import {getAll, getById} from '../api/phone.js';

export default class PhonesPage {
	state;
	constructor(element) {
		this.element = element;

		this.state = {
			phones: getAll(),
			selectedPhone: null,
			basketItems: [],
			itemAdded: null,
		};

		this.render();

	}

	initComponent(constructor, props) {
		const container = this.element.querySelector(constructor.name);

		if (!container) {
			return;
		}

		new constructor(container, props);
	}

	render() {
		this.element.innerHTML = `
			<div class="row">
				<!--Sidebar-->
				<div class="col-md-2">
					<section>
						<p>
							Search:
							<input>
						</p>
						<p>
							Sort by:
							<select>
								<option value="name">Alphabetical</option>
								<option value="age">Newest</option>
							</select>
							</p>
					</section>
					
					<section>
						<p>Shopping Cart</p>
						
						${this.state.itemAdded ? `
							<ul
							data-element="basket-list"
							class="basket-list"
							>
								<ShoppingCart></ShoppingCart>
							</ul>
						` : `
							<p data-cart="empty">Корзина пуста</p>
						`}
					</section>

					

				</div>

				<!--Main content-->
				<div class="col-md-10">
					${ this.state.selectedPhone ? `
						<PhoneViewer></PhoneViewer>
					` : `
						<PhonesCatalog></PhonesCatalog>
					`}
				</div>
			</div>
		`;

		this.initComponent(PhonesCatalog, {
			phones: this.state.phones,
			basketItems: this.state.basketItems,

			onItemAdded: (phoneId) => {
				this.state.basketItems.push(phoneId);
				this.state.itemAdded = true;
				this.render();
			},

			onPhoneSelected: (phoneId) => {
				this.state.selectedPhone = getById(phoneId);
				this.render();
			},
		});

		this.initComponent(PhoneViewer, {
			phone: this.state.selectedPhone,

			onBack: () => {
				this.state.selectedPhone = null;
				this.render();
			},

			onItemRemoved: (removedElem) => {
				this.state.basketItems.splice(removedElem, 1);
				this.render();
			},

			onItemAdded: (phoneId) => {
				this.state.basketItems.push(phoneId);
				this.state.itemAdded = true;
				this.render();
			},
		});

		this.initComponent(ShoppingCart, {
			phones: this.state.phones,
			basketItems: this.state.basketItems,

			onItemRemoved: (removedElem) => {
				this.state.basketItems.splice(removedElem, 1);
				this.render();
			},

			onItemAdded: (phoneId) => {
				this.state.basketItems.push(phoneId);
				this.state.itemAdded = true;
				this.render();
			},
		});



	}
}