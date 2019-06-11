import Component from '../Component.js';

export default class Basket extends Component {
  constructor(element, props) {
    super(element, props);


    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget =
        event.target.closest('[data-element="remove-button"]');

      if (!delegateTarget) {
        return;
      }

      let numberInBasket = delegateTarget.dataset.numberInBasket;
      this.props.items.splice(numberInBasket, 1);

      this.render();
    })
  }

  render() {
    const {items} = this.props;
    this.element.innerHTML = `
    <section>
      <p>Shopping Cart</p>
      <ul>
        ${items.map((item, i) => `
          <li>
            ${item}
            <button
              data-element="remove-button"
              data-number-in-basket="${i}"
              >x</button></li>
          `).join('')}
      </ul>
    </section>
    `
  }
}
