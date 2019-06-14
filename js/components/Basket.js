import Component from '../Component.js';

export default class Basket extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'delete-button', (event) => {
      this.props.onDelete(
        +event.delegateTarget.dataset.itemIndex
      );
    });
  }

  render() {

    const { items } = this.props;

    this.element.innerHTML = `
      <section>
        <p>Shopping Cart</p>
        <ul>
          ${items.map((item, index) => `
            <li>
              ${item}
              
              <button
                data-element="delete-button"
                data-item-index="${index}"
              >
                x
              </button>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  }
}
