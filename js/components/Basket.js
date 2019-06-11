import Component from '../Component.js';

export default class Basket extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();
  }

  render() {
    const { items } = this.props;

    this.element.innerHTML = `
      <section>
        <p>Shopping Cart</p>
        <ul>
          ${items.map(item => `
            <li>
              ${item}
              <button>x</button>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  }
}
