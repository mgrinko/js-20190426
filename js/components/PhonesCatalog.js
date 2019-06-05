export default class PhonesCatalog {
	constructor(element, props) {
		this.element = element;
		this.props = props;

		this.render();
	}

	render() {
		this.element.innerHTML = `
			<ul class="phones">
				${ this.props.phones.map(phone => `
				
				<li class="thumbnail">
					<a href="#!/phones/${phone.id}" class="thumb">
						<img alt="${phone.name}" src="${phone.imageUrl}">
					</a>

					<div class="phones__btn-buy-wrapper">
						<a class="btn btn-success">
							Add
						</a>
					</div>
					<a href="#!/phones/${phone.id}">${phone.id}</a>
					<p>${phone.snippet}</p>
				</li>

				`).join('') }
			</ul>
		`;
	}
}