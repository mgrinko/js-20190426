export default class PhoneViewer {
	state;
	constructor(element, props) {
		this.element = element;
		this.props = props;

		this.state = {
			currentPicture: this.props.phone.images[0],
			currentName: this.props.phone.name,
			currentDescr: this.props.phone.description
		};

		this.render();

		this.element.addEventListener('click', (event) => {
			const delegateTarget = event.target.closest('[data-element="back-button"]');

			if (!delegateTarget) {
				return;
			}

			this.props.onBack();
		});


		this.element.addEventListener('click', (event) => {

			const imgBig = document.querySelector('.phone');
			const delegateTarget = event.target.closest('li img');

			if (!delegateTarget) {
				return;
			}

			const imgSrc = delegateTarget.getAttribute('src');
			imgBig.setAttribute('src', imgSrc);
		});
	}

	render() {
		const { phone } = this.props;

		this.element.innerHTML = `

			<img class="phone" src="${ this.state.currentPicture }">

			<button data-element="back-button">Back</button>
			<button data-element="add-to-basket">Add to basket</button>

			<h1>${ this.state.currentName }</h1>

			<p>${ this.state.currentDescr }</p>

			<ul class="phone-thumbs">

				${this.props.phone.images.map( image => `
					<li>
						<img src="${image}" alt="">
					</li>
				`).join('') }

			</ul>
		`;
	}
}