import Component from '../Component.js';

export default class Basket extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'delete-button', (event) => {
      const index = +event.delegateTarget.dataset.itemIndex;

      this.props.onDelete(index);
    });
  }

  render() {
    const { items } = this.props;

    this.element.innerHTML = `
      <section class="basket">
        <h4>Shopping Cart</h4>
        
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
