export default class PhonesCatalog {
	constructor(element, props) {
		this.element = element;
		this.props = props;

		this.render();

		this.element.addEventListener('click', (event) => {
			const delegateTarget = event.target.closest('[data-element="phone-link"]');

			if (!delegateTarget) {
				return;
			}

			this.props.onPhoneSelected(delegateTarget.dataset.phoneId);
		});

		this.element.addEventListener('click', (event) => {
			const addToCart = event.target.closest('[data-element="phone-add"]');

			if (!addToCart) {
				return;
			}

			this.props.onItemAdded(addToCart.dataset.phoneId);
		});

	}

	render() {
		this.element.innerHTML = `
			<ul class="phones">
				${ this.props.phones.map(phone => `
				
				<li class="thumbnail">
					<a
						data-element="phone-link"
						data-phone-id="${phone.id}"
						href="#!/phones/${phone.id}"
						class="thumb"
					>
						<img alt="${phone.name}" src="${phone.imageUrl}">
					</a>

					<div class="phones__btn-buy-wrapper">
						<a 
							data-element="phone-add"
							data-phone-id="${phone.id}"
							class="btn btn-success">Add</a>
					</div>
					<a
						data-element="phone-link"
						data-phone-id="${phone.id}"
						href="#!/phones/${phone.id}"
					>
						${phone.id}
					</a>
					
					<p>${phone.snippet}</p>
				</li>

				`).join('') }
			</ul>
		`;
	}
}